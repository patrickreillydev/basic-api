import * as data from '../../../australian_postcodes.json'
import { PostalCodeI, ByPostcodeI } from './search.object';

interface RequestQuery {
    q?: string
}

export default class SearchService {
    constructor() { }

    getLocationsByPostalCode(requestQuery: RequestQuery): ByPostcodeI[] {
        const postalCodes = requestQuery?.q
        if (!postalCodes?.length) return []
        const mapPostalCodeData = this.mapPostalCodeData()
        const codes = this.splitCodes(postalCodes)

        if (!mapPostalCodeData || !codes) return []

        const results = this.handleResult(mapPostalCodeData, codes)
        if (!results) {
            return []
        }
        return results
    }

    /** Private Methods */
    private handleResult(mappedCodes: Map<string, ByPostcodeI[]>, codes: string[]): ByPostcodeI[] {
        const existingPostalCode = new Set<string>()
        return codes.reduce((acc: ByPostcodeI[], c: string) => {
            if (existingPostalCode.has(c)) return acc;
            existingPostalCode.add(c)
            return [...acc, ...(mappedCodes.get(c) || [])];
        }, []).flat()
    }


    /**  Split codes from string and check to see if they're valid numbers */
    private splitCodes(codes: string): string[] {
        return codes.split(',').filter(c => this.parseCode(c));
    }

    /** Parse the postcode into integer value and check if value is a number. */
    private parseCode(code: string): boolean {
        return !isNaN(parseInt(code));
    }

    /**  Map locations into array with the postcode being the unique key identifier */
    private mapPostalCodeData(): Map<string, ByPostcodeI[]> | undefined {
        const postcodes: PostalCodeI[] = Object.values(data)
        if (!postcodes.length) { return }
        const postcodeMapped = postcodes.reduce((acc: Map<string, ByPostcodeI[]>, p: PostalCodeI) => {
            const locations = acc.get(p.postcode);
            if (locations?.length) {
                locations.push({ state: p.state, postcode: p.postcode, locality: p.locality });
                return acc;
            }
            acc.set(p.postcode, [{ state: p.state, postcode: p.postcode, locality: p.locality }])

            return acc;
        }, new Map<string, ByPostcodeI[]>)

        return postcodeMapped
    }


}
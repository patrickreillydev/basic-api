import SearchService from "./search.service";
import { Response, Request } from 'express'


export default class SearchController {
    private readonly service;
    constructor(service: SearchService) {
        this.service = service
    }

    /**
     *
     * 
     * @param request 
     * @param response 
     */
    getByPostalCode(request: Request, response: Response) {
        const data = this.service.getLocationsByPostalCode(request?.query)
        if (!data?.length) {
            response.json({ data: [], message: `Unable to find from postcode ${request?.query?.q}` })
        }
        else {
            response.json({ data })
        }
    }
}
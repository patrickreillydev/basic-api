
export interface ByPostcodeI {
    state: string
    postcode: string
    locality: string
}

export interface ByPostcodeResponse {
    data: ByPostcodeI[]
}

export interface PostalCodeI {
    id: number,
    postcode: string
    locality: string
    state: string
    long: number,
    lat: number,
    dc: string
    type: string
    status: string
    sa3: string
    sa3name: string
    sa4: string
    sa4name: string
    region: string
    Lat_precise: number,
    Long_precise: number,
    SA1_CODE_2021: string
    SA1_NAME_2021: string
    SA2_CODE_2021: string
    SA2_NAME_2021: string
    SA3_CODE_2021: string
    SA3_NAME_2021: string
    SA4_CODE_2021: string
    SA4_NAME_2021: string
    RA_2011: string
    RA_2016: string
    RA_2021: string
    RA_2021_NAME: string
    MMM_2015: string
    MMM_2019: string
    ced: string
    altitude: string
    chargezone: string
    phn_code: string
    phn_name: string
    lgaregion: string
    lgacode: string
    electorate: string
    electoraterating: string
    sed_code: string
    sed_name: string
}
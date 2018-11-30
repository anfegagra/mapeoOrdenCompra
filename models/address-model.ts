import { LocationCoordinate } from './location-coordinate-model';
import { Country } from './country-model';

export class Address {
    id: string;
    addressTypeCode: number;
    addressFormatCode: number;
    postbox: string;
    floor: string;
    room: string;
    streetName: string;
    additionalStreetName: string;
    blockName: string;
    buildingName: string;
    buildingNumber: string;
    inhouseMail: string;
    department: string;
    markAttention: string;
    markCare: string;
    plotIdentification: string;
    citySubdivisionName: string;
    cityName: string;
    postalZone: string;
    countrySubentity: string
    countrySubentityCode: number;
    region: string;
    district: string;
    timezoneOffset: string;
    addressLine: string;
    country: Country;
    locationCoordinate: LocationCoordinate;
}
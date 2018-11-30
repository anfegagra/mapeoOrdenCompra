import { LocationCoordinate } from './location-coordinate-model';
import { Address } from './address-model';
import { Period } from "./period-model";

export class Location {
    iD: string;
    description: string;
    conditions: string;
    countrySubentity: string;
    countrySubentityCode: number;
    locationTypeCode: number;
    informationURI: string;
    name: string;
    validityPeriod: Period;
    address: Address;
    subsidiaryLocation: Location;
    locationCoordinate: LocationCoordinate;
}
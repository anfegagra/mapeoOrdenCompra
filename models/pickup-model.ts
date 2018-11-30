import { Location } from './location-model';
import { Party } from './party-model';

export class Pickup {
    iD: string;
    actualPickupDate: Date;
    actualPickupTime: Date;
    earliestPickupDate: Date;
    earliestPickupTime: Date;
    latestPickupDate: Date;
    latestPickupTime: Date;
    pickupLocation: Location;
    pickupParty: Party;
}
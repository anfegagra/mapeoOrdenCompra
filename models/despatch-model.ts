import { Period } from './period-model';
import { Contact } from './contact-model';
import { Party } from './party-model';
import { Location } from './location-model';
import { Address } from './address-model';

export class Despatch {
    iD: string;
    requestedDespatchDate: Date;
    requestedDespatchTime: Date;
    estimatedDespatchDate: Date;
    estimatedDespatchTime: Date;
    actualDespatchDate: Date;
    actualDespatchTime: Date;
    guaranteedDespatchDate: Date;
    guaranteedDespatchTime: Date;
    releaseID: string;
    instructions: string;
    despatchAddress: Address;
    despatchLocation: Location;
    despatchParty: Party;
    carrierParty: Party;
    notifyParty: Party;
    contact: Contact;
    estimatedDespatchPeriod: Period;
    requestedDespatchPeriod: Period;
}
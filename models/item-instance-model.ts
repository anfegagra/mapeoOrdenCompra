import { LotIdentification } from './lot-identification-model';
import { ItemProperty } from './item-property-model';

export class ItemInstance {
    productTraceID: string;
    manufactureDate: Date;
    manufactureTime: Date;
    bestBeforeDate: Date;
    registrationID: string;
    serialID: string;
    additionalItemProperty: ItemProperty;
    lotIdentification: LotIdentification;
}
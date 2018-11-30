import { Dimension } from './dimension-model';
import { Party } from "./party-model";
import { PhysicalAttribute } from "./physical-attribute-model";

export class ItemIdentification {
    iD: string;
    extendedID: string;
    barcodeSymbologyID: string;
    physicalAttribute: PhysicalAttribute;
    measurementDimension: Dimension;
    issuerParty: Party;
}
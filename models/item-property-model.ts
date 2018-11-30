import { ItemPropertyRange } from './item-property-range-model';
import { ItemPropertyGroup } from './item-property-group-model';
import { Dimension } from './dimension-model';
import { Period } from "./period-model";

export class ItemProperty {
    iD: string;
    name: string;
    nameCode: number;
    testMethod: string;
    value: string;
    valueQuantity: number;
    valueQualifier: string;
    importanceCode: number;
    listValue: string;
    usabilityPeriod: Period;
    itemPropertyGroup: ItemPropertyGroup;
    rangeDimension: Dimension;
    itemPropertyRange: ItemPropertyRange;
}
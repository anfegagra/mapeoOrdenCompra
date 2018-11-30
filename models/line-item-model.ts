import { LineReference } from './line-reference-model';
import { Item } from './item-model';
import { AllowanceCharge } from './allowance-charge-model';
import { DeliveryTerms } from './delivery-terms-model';
import { Delivery } from './delivery-model';
import { Party } from './party-model';
import { Period } from './period-model';
import { TaxTotal } from './tax-total-model';
import { OrderedShipment } from './ordered-shipment-model';
import { Price } from './price-model';
import { PriceExtension } from './price-extension-model';

export class LineItem {
    iD: string;
    salesOrderID: string;
    uUID: string;
    note: string;
    lineStatusCode: number;
    quantity: number;
    lineExtensionAmount: number;
    totalTaxAmount: number;
    minimumQuantity: number;
    maximumQuantity: number;
    minimumBackorderQuantity: number;
    maximumBackorderQuantity: number;
    inspectionMethodCode: number;
    partialDeliveryIndicator: Indicator;
    backOrderAllowedIndicator: Indicator;
    accountingCostCode: number;
    accountingCost: string;
    warrantyInformation: string;
    delivery: Delivery;
    deliveryTerms: DeliveryTerms;
    originatorParty: Party;
    orderedShipment: OrderedShipment;
    pricingReference: PricingReference;
    allowanceCharge: AllowanceCharge;
    price: Price;
    item: Item;
    subLineItem: LineItem;
    warrantyValidityPeriod: Period;
    warrantyParty: Party;
    taxTotal: TaxTotal;
    itemPriceExtension: PriceExtension;
    lineReference: LineReference;
}
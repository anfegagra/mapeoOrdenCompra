import { AllowanceCharge } from './allowance-charge-model';
import { Location } from './location-model';
import { Address } from './address-model';
import { Delivery } from './delivery-model';

export class Shipment {
    iD: string;
    shippingPriorityLevelCode: number;
    handlingCode: number;
    handlingInstructions: string;
    information: string;
    grossWeightMeasure: Measure;
    netWeightMeasure: Measure;
    netNetWeightMeasure: Measure;
    grossVolumeMeasure: Measure;
    netVolumeMeasure: Measure;
    totalGoodsItemQuantity: number;
    totalTransportHandlingUnitQuantity: number;
    insuranceValueAmount: number;
    declaredCustomsValueAmount: number;
    declaredForCarriageValueAmount: number;
    declaredStatisticsValueAmount: number;
    freeOnBoardValueAmount: number;
    specialInstructions: string;
    deliveryInstructions: string;
    splitConsignmentIndicator: Indicator;
    consignmentQuantity: number;
    consignment: Consignment;
    goodsItem: GoodsItem";
    shipmentStage: ShipmentStage;
    delivery: Delivery;
    transportHandlingUnit: TransportHandlingUnit;
    returnAddress: Address;
    originAddress: Address;
    firstArrivalPortLocation: Location;
    lastExitPortLocation: Location;
    exportCountry: Country;
    freightAllowanceCharge: AllowanceCharge;
}
import { DocumentReference } from './document-reference-model';
import { Delivery } from './delivery-model';
import { AllowanceCharge } from './allowance-charge-model';
import { HazardousGoodsTransit } from './hazardous-goods-transit-model';
import { Dimension } from './dimension-model';
import { Temperature } from './temperature-model';
import { Party } from './party-model';
import { SupplierParty } from './supplier-party-model';
import { Package } from './package-model';

export class TransportEquipment {
    iD: string;
    referencedConsignmentID: string;
    transportEquipmentTypeCode: number;
    providerTypeCode: number;
    ownerTypeCode: number;
    sizeTypeCode: number;
    dispositionCode: number;
    fullnessIndicationCode: number;
    refrigerationOnIndicator: Indicator;
    information: string;
    returnabilityIndicator: Indicator;
    legalStatusIndicator: Indicator;
    airFlowPercent: Percent;
    humidityPercent: Percent;
    animalFoodApprovedIndicator: Indicator;
    humanFoodApprovedIndicator: Indicator;
    dangerousGoodsApprovedIndicator: Indicator;
    refrigeratedIndicator: Indicator;
    characteristics: string;
    damageRemarks: string;
    description: string;
    specialTransportRequirements: string;
    grossWeightMeasure: Measure;
    grossVolumeMeasure: Measure;
    tareWeightMeasure: Measure;
    trackingDeviceCode: number;
    powerIndicator: Indicator;
    traceID: string;
    measurementDimension: Dimension;
    transportEquipmentSeal: TransportEquipmentSeal;
    minimumTemperature: Temperature;
    maximumTemperature: Temperature;
    providerParty: Party;
    loadingProofParty: Party;
    supplierParty: SupplierParty;
    ownerParty: Party;
    operatingParty: Party;
    loadingLocation: Location;
    unloadingLocation: Location;
    storageLocation: Location;
    positioningTransportEvent: TransportEvent;
    quarantineTransportEvent: TransportEvent;
    deliveryTransportEvent: TransportEvent;
    pickupTransportEvent: TransportEvent;
    handlingTransportEvent: TransportEvent;
    loadingTransportEvent: TransportEvent;
    transportEvent: TransportEvent;
    applicableTransportMeans: TransportMeans;
    haulageTradingTerms: TradingTerms;
    hazardousGoodsTransit: HazardousGoodsTransit;
    packagedTransportHandlingUnit: TransportHandlingUnit;
    serviceAllowanceCharge: AllowanceCharge;
    freightAllowanceCharge: AllowanceCharge;
    attachedTransportEquipment: TransportEquipment;
    delivery: Delivery;
    pickup: Pickup;
    despatch: Despatch;
    shipmentDocumentReference: DocumentReference;
    containedInTransportEquipment: TransportEquipment;
    package: Package;
    goodsItem: GoodsItem;
}
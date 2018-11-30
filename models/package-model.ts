import { Despatch } from './despatch-model';
import { GoodsItem } from './goods-item-model';
import { Delivery } from './delivery-model';
import { DeliveryUnit } from './delivery-unit-model';
import { Dimension } from './dimension-model';
import { TransportEquipment } from './transport-equipment-model';
import { Pickup } from './pickup-model';

export class Package {
    iD: string;
    quantity: number;
    returnableMaterialIndicator: Indicator;
    packageLevelCode: number;
    packagingTypeCode: number;
    packingMaterial: string;
    traceID: string;
    containedPackage: Package;
    containingTransportEquipment: TransportEquipment;
    goodsItem: GoodsItem;
    measurementDimension: Dimension;
    deliveryUnit: DeliveryUnit;
    delivery: Delivery;
    pickup: Pickup;
    despatch: Despatch;
}
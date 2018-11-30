import { Shipment } from './shipment-model';
import { Package } from './package-model';

export class OrderedShipment {
    shipment: Shipment
    package: Package;
}
import { Location } from './location-model';
import { DeliveryUnit } from './delivery-unit-model';
import { Address } from './address-model';
import { Period } from './period-model';
import { DeliveryTerms } from './delivery-terms-model';
import { Party } from './party-model';
import { Shipment } from './shipment-model';

export class Delivery {
    iD: string;
	quantity: string;
	minimumQuantity: string;
	maximumQuantity: string;
	actualDeliveryDate: Date;
	actualDeliveryTime: Date;
	latestDeliveryDate: Date;
	latestDeliveryTime: Date;
	releaseID: string;
	trackingID: string;
	deliveryAddress: Address;
	deliveryLocation: Location;
	alternativeDeliveryLocation: Location;
	requestedDeliveryPeriod: Period;
	promisedDeliveryPeriod: Period;
	estimatedDeliveryPeriod: Period;
	carrierParty: Party;
	deliveryParty: Party;
	notifyParty: Party;
	despatch: string;
	deliveryTerms: DeliveryTerms;
	minimumDeliveryUnit: DeliveryUnit;
	maximumDeliveryUnit: DeliveryUnit;
	shipment: Shipment;
}
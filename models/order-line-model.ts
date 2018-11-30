import { LineReference } from './line-reference-model';
import { LineItem } from './line-item-model';
import { DocumentReference } from './document-reference-model';
import { OrderLineReference } from './order-line-reference-model';

export class OrderLine {
    substitutionStatusCode: string;
	note: string;
	lineItem: LineItem;
	sellerProposedSubstituteLineItem: LineItem;
	sellerSubstitutedLineItem: LineItem;
	buyerProposedSubstituteLineItem: LineItem;
	catalogueLineReference: LineReference;
	quotationLineReference: LineReference;
	orderLineReference: OrderLineReference;
	documentReference: DocumentReference;
}
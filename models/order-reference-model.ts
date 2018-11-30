import { DocumentReference } from './document-reference-model';

export class OrderReference {
    iD: string;
    salesOrderID: string;
    copyIndicator: Indicator;
    uUID: string;
    issueDate: Date;
    issueTime: Date;
    customerReference: string;
    orderTypeCode: number;
    documentReference: DocumentReference;
}
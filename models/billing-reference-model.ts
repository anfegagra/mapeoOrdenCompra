import { BillingReferenceLine } from './billing-reference-line-model';
import { DocumentReference } from './document-reference-model';

export class BillingReference {
    invoiceDocumentReference: DocumentReference;
    selfBilledInvoiceDocumentReference: DocumentReference;
    creditNoteDocumentReference: DocumentReference;
    selfBilledCreditNoteDocumentReference: DocumentReference;
    debitNoteDocumentReference: DocumentReference;
    reminderDocumentReference: DocumentReference;
    additionalDocumentReference: DocumentReference;
    billingReferenceLine: BillingReferenceLine;
}
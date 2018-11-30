import { DocumentReference } from './document-reference-model';
import { Attachment } from './attachment-model';
import { Party } from './party-model';

export class Signature {
    iD: string;
    note: string;
    validationDate: Date;
    validationTime: Date;
    validatorID: string;
    canonicalizationMethod: string;
    signatureMethod: string;
    signatoryParty: Party;
    digitalSignatureAttachment: Attachment;
    originalDocumentReference: DocumentReference;
}
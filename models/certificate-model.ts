import { DocumentReference } from './document-reference-model';
import { Party } from './party-model';
import { Signature } from './signature-model';

export class Certificate {
    iD: string;
    certificateTypeCode: number;
    certificateType: string;
    remarks: string;
    issuerParty: Party;
    documentReference: DocumentReference;
    signature: Signature;
}
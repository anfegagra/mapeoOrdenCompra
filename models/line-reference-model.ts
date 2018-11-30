import { DocumentReference } from './document-reference-model';

export class LineReference {
    lineID: string;
    uUID: string;
    lineStatusCode: number;
    documentReference: DocumentReference;
}
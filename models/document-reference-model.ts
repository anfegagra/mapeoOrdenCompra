import { Attachment } from './attachment-model';
import { Period } from './period-model';
import { Party } from './party-model';
import { ResultOfVerification } from './result-of-verification-model';

export class DocumentReference {
    iD: string;
	copyIndicator: string;
	uuid: string;
	issueDate: Date;
	issueTime: Date;
	documentTypeCode: number;
	documentType: string;
	xPath: string;
	languageID: string;
	localeCode: number;
	versionID: string;
	documentStatusCode: number;
	documentDescription: string;
	attachment: Attachment;
	validityPeriod: Period;
	issuerParty: Party;
	resultOfVerification: ResultOfVerification;
}
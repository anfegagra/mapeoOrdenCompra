import { Party } from "./party-model";

export class ResultOfVerification {
    validatorID: string;
    validationResultCode: number;
    validationDate: Date;
    validationTime: Date;
    validateProcess: string;
    validateTool: string;
    validateToolVersion: string;
    signatoryParty: Party;
}
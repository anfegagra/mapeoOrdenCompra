import { Period } from './period-model';
export class PaymentTerms {
	id: string;
    paymentMeansID: string;
	prepaidPaymentReferenceID: string;
	note: string;
	referenceEventCode: number;
	settlementDiscountPercent: Percent;
	penaltySurchargePercent: Percent;
	paymentPercent: Percent;
	amount: Amount;
	settlementDiscountAmount: Amount;
	penaltyAmount: Amount;
	paymentTermsDetailsURI: string;
	paymentDueDate: Date;
	installmentDueDate: Date;
	invoicingPartyReference: string;
	settlementPeriod: Period;
	penaltyPeriod: Period;
	exchangeRate: ExchangeRate;
	validityPeriod: Period;
}
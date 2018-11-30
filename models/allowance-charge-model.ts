import { TaxCategory } from './tax-category-model';
import { PaymentMeans } from './payment-means-model';
import { TaxTotal } from "./tax-total-model";

export class AllowanceCharge {
    iD: string;
	chargeIndicator: Indicator;
	allowanceChargeReasonCode: number;
    allowanceChargeReason: string;
    multiplierFactorNumeric: number;
    prepaidIndicator: string;
    sequenceNumeric: number;
    amount: number;
    baseAmount: number;
	accountingCostCode: number;
    accountingCost: string;
    perUnitAmount: number;
	taxCategory: TaxCategory;
	taxTotal: TaxTotal;
	paymentMeans: PaymentMeans;
}
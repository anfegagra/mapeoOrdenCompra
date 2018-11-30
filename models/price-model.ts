import { AllowanceCharge } from './allowance-charge-model';
import { Period } from "./period-model";

export class Price {
    priceAmount: number;
    baseQuantity: number;
    priceChangeReason: string;
    priceTypeCode: number;
    priceType: string;
    orderableUnitFactorRate: Rate;
    validityPeriod: Period;
    priceList: PriceList;
    allowanceCharge: AllowanceCharge;
    pricingExchangeRate: ExchangeRate;
}
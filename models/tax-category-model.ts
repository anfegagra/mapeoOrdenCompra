export class TaxCategory {
    iD: string;
    name: string;
    percent: Percent;
    baseUnitMeasure: Measure;
    perUnitAmount: Amount;
    taxExemptionReasonCode: number;
    taxExemptionReason: string;
    tierRange: string;
    tierRatePercent: Percent;
    taxScheme:TaxScheme;
}
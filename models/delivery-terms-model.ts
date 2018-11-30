import { AllowanceCharge } from "./allowance-charge-model";

export class DeliveryTerms {
    id: string;
	lossRiskResponsibilityCode: number;
	lossRisk: string;
	amount: number;
	deliveryLocation: Location;
	allowanceCharge: AllowanceCharge;
}
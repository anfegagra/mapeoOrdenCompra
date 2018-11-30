export class PaymentMeans {
    id: string;
	paymentMeansCode: string;
	paymentDueDate: Date;
	paymentChannelCode: string;
	instructionID: string;
	instructionNote: string;
	paymentID: string;
	cardAccount: CardAccount;
	payerFinancialAccount: FinancialAccount;
	payeeFinancialAccount: FinancialAccount;
	creditAccount: CreditAccount;
	paymentMandate: PaymentMandate;
	tradeFinancing: TradeFinancing;
}
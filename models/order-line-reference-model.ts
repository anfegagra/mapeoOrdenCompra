import { OrderReference } from "./order-reference-model";

export class OrderLineReference {
    lineID: string;
    salesOrderLineID: string;
    uUID: string;
    lineStatusCode: number;
    orderReference: OrderReference;
}
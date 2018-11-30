import { Contact } from './contact-model';
import { Party } from './party-model';
export class CustomerParty {
    customerAssignedAccountID: string;
	supplierAssignedAccountID: string;
	additionalAccountID: string;
	party: Party;
	deliveryContact: Contact;
	accountingContact: Contact;
	buyerContact: Contact;
}
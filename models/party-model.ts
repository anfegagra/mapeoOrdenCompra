export class Party {
    markCareIndicator: Indicator;
    markAttentionIndicator: Indicator;
    websiteURI: string;
    logoReferenceID: string;
    endpointID: string;
    industryClassificationCode: number;
    partyIdentification: string;
    partyName: string;
    language: Language;
    postalAddress: Address;
    physicalLocation: Location;
    partyTaxScheme: PartyTaxScheme;
    partyLegalEntity: PartyLegalEntity;
    contact: Contact;
    person: Person;
    agentParty: Party;
    serviceProviderParty: ServiceProviderParty;
    powerOfAttorney: PowerOfAttorney;
    financialAccount: FinancialAccount;
}
import { HazardousGoodsTransit } from './hazardous-goods-transit-model';
import { Party } from "./party-model";
import { SecondaryHazard } from "./secondary-hazard-model";
import { Temperature } from './temperature-model';

export class HazardousItem {
    iD: string;
    placardNotation: string;
    placardEndorsement: string;
    additionalInformation: string;
    uNDGCode: number;
    emergencyProceduresCode: number;
    medicalFirstAidGuideCode: number;
    technicalName: string;
    categoryName: string;
    hazardousCategoryCode: number;
    upperOrangeHazardPlacardID: string;
    lowerOrangeHazardPlacardID: string;
    markingID: string;
    hazardClassID: string;
    netWeightMeasure: Measure;
    netVolumeMeasure: Measure;
    quantity: number;
    contactParty: Party;
    secondaryHazard: SecondaryHazard;
    hazardousGoodsTransit: HazardousGoodsTransit;
    emergencyTemperature: Temperature;
    flashpointTemperature: Temperature;
    additionalTemperature: Temperature;
}
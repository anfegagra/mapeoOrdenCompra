import { Temperature } from "./temperature-model";

export class HazardousGoodsTransit {
    transportEmergencyCardCode: number;
    packingCriteriaCode: number;
    hazardousRegulationCode: number;
    inhalationToxicityZoneCode: number;
    transportAuthorizationCode: number;
    maximumTemperature: Temperature;
    minimumTemperature: Temperature;
}
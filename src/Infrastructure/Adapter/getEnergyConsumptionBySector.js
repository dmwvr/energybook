import totalFinalConsumptionBySectorData from "../../Domain/data/datasets/total_final_consumption_by_sector.csv";
import getIaeDataCsv from "../Repository/Iae/getIaeDataCsv";

const getEnergyConsumptionBySector = (setter) => {
    getIaeDataCsv(totalFinalConsumptionBySectorData, setter)
}
export default getEnergyConsumptionBySector;
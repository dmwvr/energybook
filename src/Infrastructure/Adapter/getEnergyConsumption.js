import totalEnergyConsumptionData from "../../Domain/data/datasets/total_energy_consumption.csv";
import getEnerdataCsv from "../Repository/Enerdata/getEnerdataCsv";

const getEnergyConsumption = (setter, indexesSetter, index) => {
    getEnerdataCsv(totalEnergyConsumptionData, setter, indexesSetter, index)
}

export default getEnergyConsumption;
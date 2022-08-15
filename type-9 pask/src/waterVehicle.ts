import Vehicle, {VehicleType} from "./vehicle.js";

export type WaterVehicleType = {
    maxDeph: number;
}


class WaterVehicle extends Vehicle {
    private maxDeph: number;

    constructor({maxDeph}: WaterVehicleType, waterType: VehicleType) {
        super(waterType);

        this.maxDeph = maxDeph;
    }

    override toString = (): string => {
        return `${this.getString()}/max gylis: ${this.maxDeph}`;
    }
 }

 export default WaterVehicle
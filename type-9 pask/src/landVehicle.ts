import Vehicle, {VehicleType} from "./vehicle.js";

export type LandVehicleType = {
    tires: string[];
}

class LandVehicle extends Vehicle {
    private tires: string[]

    constructor({tires}: LandVehicleType, landType: VehicleType) {
        super(landType)

        this.tires = tires;
    }

    override toString = (): string => {
        return `${this.getString()}/padangos: ${this.tires.join(', ')}`;
 }
}

export default LandVehicle
import Vehicle, {VehicleType} from "./vehicle.js";

export type AirVehicleType = {
    maxAltitude: number;
}

class Airvehicle extends Vehicle {
    private maxAltitude: number;

    constructor ({maxAltitude}: AirVehicleType, airType: VehicleType, ) {
        super(airType);
        this.maxAltitude = maxAltitude
    }
    override toString = (): string =>{
        return `${this.getString()}/max aukstis: ${this.maxAltitude}`;
    } 
}

export default Airvehicle;
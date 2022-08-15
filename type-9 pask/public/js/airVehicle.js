import Vehicle from "./vehicle.js";
class Airvehicle extends Vehicle {
    maxAltitude;
    constructor({ maxAltitude }, airType) {
        super(airType);
        this.maxAltitude = maxAltitude;
    }
    toString = () => {
        return `${this.getString()}/max aukstis: ${this.maxAltitude}`;
    };
}
export default Airvehicle;
//# sourceMappingURL=airVehicle.js.map
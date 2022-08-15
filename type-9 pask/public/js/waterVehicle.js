import Vehicle from "./vehicle.js";
class WaterVehicle extends Vehicle {
    maxDeph;
    constructor({ maxDeph }, waterType) {
        super(waterType);
        this.maxDeph = maxDeph;
    }
    toString = () => {
        return `${this.getString()}/max gylis: ${this.maxDeph}`;
    };
}
export default WaterVehicle;
//# sourceMappingURL=waterVehicle.js.map
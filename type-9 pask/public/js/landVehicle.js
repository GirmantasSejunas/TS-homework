import Vehicle from "./vehicle.js";
class LandVehicle extends Vehicle {
    tires;
    constructor({ tires }, landType) {
        super(landType);
        this.tires = tires;
    }
    toString = () => {
        return `${this.getString()}/padangos: ${this.tires.join(', ')}`;
    };
}
export default LandVehicle;
//# sourceMappingURL=landVehicle.js.map
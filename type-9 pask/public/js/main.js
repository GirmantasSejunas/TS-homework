import LandVehicle from './landVehicle.js';
import AirVehicle from './airVehicle.js';
import WaterVehicle from './waterVehicle.js';
const vehicles = [
    new LandVehicle({
        tires: ['Delux 400 ms', 'Fairtex 500 ms']
    }, {
        brand: 'Toyota',
        model: 'Auris',
        year: 2005,
    }),
    new LandVehicle({
        tires: ['Fairtex 200 ms']
    }, {
        brand: 'Nisan',
        model: 'Juke',
        year: 2007,
    }),
    new AirVehicle({
        maxAltitude: 7000,
    }, {
        brand: 'Jeti',
        model: 'Nitro',
        year: 2015,
    }),
    new AirVehicle({
        maxAltitude: 5000,
    }, {
        brand: 'Falcon',
        model: 'Bamasi',
        year: 2012,
    }),
    new WaterVehicle({
        maxDeph: 50,
    }, {
        brand: 'Sailor',
        model: 'Ocean 3000',
        year: 2011,
    }),
    new WaterVehicle({
        maxDeph: 70,
    }, {
        brand: 'LandScraper',
        model: 'Fagotti',
        year: 202,
    }),
];
vehicles.forEach(transport => console.log(transport.toString()));
//# sourceMappingURL=main.js.map
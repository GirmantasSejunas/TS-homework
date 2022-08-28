import Table from './table';
import cars from '../data/cars';
import brands from '../data/brands';
import models from '../data/models';
import CarsCollection from '../helpers/cars-colection';
import stringifyProps from '../helpers/stingify-object';

class App {
    private htmlElement: HTMLElement;

    private carsColections: CarsCollection;

    constructor(selector: string) {
      const foundElement = document.querySelector<HTMLElement>(selector);
      this.carsColections = new CarsCollection({ cars, brands, models });

      if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

      this.htmlElement = foundElement;
    }

    initialize = (): void => {
      const carTable = new Table({
        title: 'All Cars',
        colums: {
          id: 'Id',
          brand: 'Brand',
          model: 'model',
          price: 'Price',
          year: 'Year',
        },
        rowData: this.carsColections.all.map(stringifyProps),

      });
      const container = document.createElement('div');
      container.className = 'container-5';
      container.appendChild(carTable.htmlElement);

      this.htmlElement.append(container);
    };
  }

  export default App;

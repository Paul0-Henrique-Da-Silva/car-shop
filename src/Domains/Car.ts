import ICar from '../Interfaces/ICar';
import VehicleDomain from './Vehicle';

export default class CarDomain extends VehicleDomain {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}

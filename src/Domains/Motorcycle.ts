import IMotorcycle from '../Interfaces/IMotorcycle';
import VehicleDomain from './Vehicle';

export default class Motocycle extends VehicleDomain {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;
  
  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }
}
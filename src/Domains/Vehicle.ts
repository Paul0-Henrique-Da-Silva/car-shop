import IVehicle from '../Interfaces/IVehicle';

class VehicleDomain {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status ? vehicle.status : false;
    this.buyValue = vehicle.buyValue;
  }
}

export default VehicleDomain;

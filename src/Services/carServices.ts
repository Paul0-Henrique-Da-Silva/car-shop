import CarModel from '../Models/Car.ODM';
import CarDomain from '../Domains/Car';
import ICar from '../Interfaces/ICar';

export default class CarService {
  private carModel: CarModel;

  constructor() { this.carModel = new CarModel(); }

  public async createCar(car: ICar) {
    const carObj = await this.carModel.create(car);
    return new CarDomain(carObj);
  }

  public async getAll() {
    const carObjs = await this.carModel.getAll();
    return carObjs.map((value) => new CarDomain(value));
  }

  public async getById(id: string) {
    const carId = await this.carModel.getById(id);
    if (carId) return new CarDomain(carId); 
  }

  public async update(id: string, car: ICar) {
    const carUpdated = await this.carModel.update(id, car);
    if (carUpdated) return new CarDomain(carUpdated as ICar);
  }
}

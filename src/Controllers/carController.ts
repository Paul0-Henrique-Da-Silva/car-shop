import { Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/carServices';

export default class CarController {
  private carService: CarService;

  constructor() {
    this.carService = new CarService();
  }

  public async create(request: Request, response: Response) {
    const carObj: ICar = request.body;
    const car = await this.carService.createCar(carObj);
    response.status(201).json(car);  
  }

  public async getAll(_request: Request, response: Response) {
    const cars = await this.carService.getAll();
    response.status(200).json(cars);
  }

  public async getById(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const carId = await this.carService.getById(id);
      if (!carId) return response.status(404).json({ message: 'Car not found' });
      return response.status(200).json(carId);
    } catch ({ message }) { return response.status(422).json({ message }); }
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const carPartial = request.body;
    try {
      const carObj = await this.carService.update(id, carPartial);
      if (!carObj) response.status(404).json({ message: 'Car not found' });
      return response.status(200).json(carObj);
    } catch ({ message }) { return response.status(422).json({ message }); }
  }
}
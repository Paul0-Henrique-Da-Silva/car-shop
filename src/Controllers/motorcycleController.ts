import { Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleServices from '../Services/motocycleServices';

export default class MotorcycleController {
  private motoService: MotorcycleServices;

  constructor() {
    this.motoService = new MotorcycleServices();
  }

  public async create(request: Request, response: Response) {
    const motoObj: IMotorcycle = request.body;
    const moto = await this.motoService.create(motoObj);
    response.status(201).json(moto);  
  }

  public async getAll(_request: Request, response: Response) {
    const motoObj = await this.motoService.getAll();
    response.status(200).json(motoObj);
  }

  public async getById(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const motoId = await this.motoService.getById(id);
      if (!motoId) return response.status(404).json({ message: 'Motorcycle not found' });
      return response.status(200).json(motoId);
    } catch ({ message }) { return response.status(422).json({ message }); }
  }
  
  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const motoPartial = request.body;
    try {
      const motoObj = await this.motoService.update(id, motoPartial);
      if (!motoObj) response.status(404).json({ message: 'Motorcycle not found' });
      return response.status(200).json(motoObj);
    } catch ({ message }) { return response.status(422).json({ message }); }
  }
}

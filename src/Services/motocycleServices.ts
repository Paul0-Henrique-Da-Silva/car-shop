import MotorcycleModel from '../Models/Motorcyle.ODM';
import MotorcycleDomain from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleServices {
  private motoModel: MotorcycleModel;

  constructor() { this.motoModel = new MotorcycleModel(); }

  public async create(motorcycle: IMotorcycle) {
    const motocyclerObj = await this.motoModel.create(motorcycle);
    return new MotorcycleDomain(motocyclerObj);
  }

  public async getAll() {
    const motoObjs = await this.motoModel.getAll();
    return motoObjs.map((value) => new MotorcycleDomain(value));
  }

  public async getById(id: string) {
    const motoId = await this.motoModel.getById(id);
    if (motoId) return new MotorcycleDomain(motoId); 
  }
  
  public async update(id: string, moto: IMotorcycle) {
    const motoUpdated = await this.motoModel.update(id, moto);
    if (motoUpdated) return new MotorcycleDomain(motoUpdated as IMotorcycle);
  }
}
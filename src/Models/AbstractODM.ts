import { model, Model, Schema, models, isValidObjectId, UpdateQuery } from 'mongoose';

export default abstract class AbstractODM <T> {
  protected model: Model<T> ;
  protected _schema: Schema;
  protected _modelName: string;
  constructor(schema: Schema, modelName: string) {
    this._schema = schema;
    this._modelName = modelName;
    this.model = models[this._modelName] || model(this._modelName, this._schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create(obj);
  }

  public async getAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async getById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error('Invalid mongo id');
    return this.model.findById(id);
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('Invalid mongo id');
    
    const updated = await this.model
      .findByIdAndUpdate(
        { _id },
        { ...obj } as UpdateQuery<T>,
        {
          new: true,
        },
      );
    return updated;
  }
}

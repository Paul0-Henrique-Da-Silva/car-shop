import { describe } from 'mocha';
import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/carServices';

const carDb1 = {
  id: '6348513f34c123abcad040b2',
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.000,
  doorsQty: 2,
  seatsQty: 5,
};
const carDb2 = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const bodyRequest = {
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.000,
  doorsQty: 2,
  seatsQty: 5,
};

const created1 = new Car(carDb1);
const created2 = new Car(carDb2);

describe('CarService', () => {
  afterEach(sinon.restore);

  const service = new CarService();

  it('create', async function () {
    sinon.stub(Model, 'create').resolves(carDb1);
    const result = await service.create(bodyRequest);

    expect(result).to.be.deep.equal(created1);
  });

  it('getAll', async function () {
    sinon.stub(Model, 'find').resolves([carDb1, carDb2]);
    const result = await service.getAll();
    expect(result).to.be.deep.equal([created1, created2]);
  });

  it('getById', async function () {
    sinon.stub(Model, 'findOne').resolves(carDb1);
    const result = await service.getById(carDb1.id);
    expect(result).to.be.deep.equal(created1);
  });
});

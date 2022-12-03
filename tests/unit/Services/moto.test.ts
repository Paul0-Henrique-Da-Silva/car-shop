import { describe } from 'mocha';
import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motocycle from '../../../src/Domains/Motorcycle';
import MotocycleServices from '../../../src/Services/motocycleServices';

const motoDb1 = {
  id: '6348513f34c123abcad040b2',
  model: ' Honda Cb 600f Hornet',
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street' as 'Street' | 'Custom' | 'Trail',
  engineCapacity: 600,
};
const motoDb2 = {
  model: 'Suzuki intruder 125',
  year: 2012,
  color: 'Azul',
  status: true,
  buyValue: 7.500,
  category: 'Street' as 'Street' | 'Custom' | 'Trail',
  engineCapacity: 125,
};

const bodyRequest = {
  model: 'Suzuki intruder 125',
  year: 2012,
  color: 'Azul',
  status: true,
  buyValue: 7.500,
  category: 'Street' as 'Street' | 'Custom' | 'Trail',
  engineCapacity: 125,
};

const created1 = new Motocycle(motoDb1);
const created2 = new Motocycle(motoDb2);

describe('MotocycleServices', () => {
  afterEach(sinon.restore);

  const service = new MotocycleServices();

  it('create', async function () {
    sinon.stub(Model, 'create').resolves(motoDb1);
    const result = await service.create(bodyRequest);

    expect(result).to.be.deep.equal(created1);
  });

  it('getAll', async function () {
    sinon.stub(Model, 'find').resolves([motoDb1, motoDb2]);
    const result = await service.getAll();
    expect(result).to.be.deep.equal([created1, created2]);
  });

  it('getById', async function () {
    sinon.stub(Model, 'findOne').resolves(motoDb1);
    const result = await service.getById(motoDb1.id);
    expect(result).to.be.deep.equal(created1);
  });
});

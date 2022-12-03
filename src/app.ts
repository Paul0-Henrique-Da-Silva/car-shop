/* eslint-disable no-console */
import express from 'express';
import carRouter from './Router/carRouter';
import motocycleRouter from './Router/motorcycleRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(carRouter);
    this.app.use(motocycleRouter);
  }
}

export { App };

const { app } = new App();

export default app;

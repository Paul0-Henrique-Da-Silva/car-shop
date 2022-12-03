import { Router } from 'express';
import MotorcycleController from '../Controllers/motorcycleController';

const motorcycleController = new MotorcycleController();

const router = Router();

router.post('/motorcycles', (request, response) => motorcycleController.create(request, response));
router.get('/motorcycles', (request, response) => motorcycleController.getAll(request, response));
router.get(
  '/motorcycles/:id', 
  (request, response) => motorcycleController.getById(request, response),
);
router.put(
  '/motorcycles/:id', 
  (request, response) => motorcycleController.update(request, response),
);

export default router;

import { Router } from 'express';

import CarController from '../Controllers/carController';

const carController = new CarController();

const router = Router();

router.post('/cars', (request, response) => carController.create(request, response));
router.get('/cars', (request, response) => carController.getAll(request, response));
router.get('/cars/:id', (request, response) => carController.getById(request, response));
router.put('/cars/:id', (request, response) => carController.update(request, response));

export default router;

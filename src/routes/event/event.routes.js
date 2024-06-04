import { Router } from 'express';
import EventController from '../../controllers/event/event.controller.js';
import { createEventValidator, updateEventValidator, deleteEventValidator } from '../../validators/event.validator.js';

const eventRoutes = Router();
eventRoutes.get('/', EventController.get);
eventRoutes.get('/:id', EventController.find);
eventRoutes.post('/', createEventValidator, EventController.post);
eventRoutes.put('/:id', updateEventValidator, EventController.put);
eventRoutes.delete('/:id', deleteEventValidator, EventController.delete);

export default eventRoutes;

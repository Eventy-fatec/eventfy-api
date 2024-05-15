import { validationResult } from 'express-validator';
import Event from '../../models/event.model.js';

export default class EventController {
  static async get(req, res) {
    const events = await Event.findMany();
    return res.json(events);
  }

  static async find(req, res) {
    const event = await Event.findUnique({
      where: {
        id: +req.params.id,
      },
    });
    if (!event) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    return res.json(Event);
  }

  static async post(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const event = await Event.create({
      data: req.body,
    });

    return res.json(event);
  }

  static async put(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const event = await Event.findUnique({
      where: {
        id: +req.params.id,
      },
    });
    if (!event) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    const updatedEvent = await Event.update({
      where: {
        id: +req.params.id,
      },
      data: req.body,
    });
    return res.json(updatedEvent);
  }

  static async delete(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const event = await Event.findUnique({
      where: {
        id: +req.params.id,
      },
    });
    if (!event) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    await Event.delete({
      where: {
        id: +req.params.id,
      },
    });
    return res.status(204).json({ message: 'Evento deletado com sucesso' });
  }
}

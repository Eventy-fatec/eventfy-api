import { body, param } from 'express-validator';

export const createEventValidator = [
  body('email').isEmail().withMessage('Email inválido'),
  body('title').isString().withMessage('Título inválido'),
  body('description').isString().withMessage('Descrição inválido'),
  body('openingDate').isString().withMessage('Data de abertura inválido'),
  body('closingDate').isString().withMessage('Data de encerramento inválido'),
  body('startTime').isString().withMessage('Hora de início inválido'),
  body('finishTime').isString().withMessage('Hora de finalização inválido'),
  body('street').isString().withMessage('Rua inválida'),
  body('streetNumber').isString().withMessage('Rua inválida'),
];

export const updateEventValidator = [
  body('email').isEmail().withMessage('Email inválido'),
  body('title').isString().withMessage('Título inválido'),
  body('description').isString().withMessage('Descrição inválido'),
  body('openingDate').isString().withMessage('Data de abertura inválido'),
  body('closingDate').isString().withMessage('Data de encerramento inválido'),
  body('startTime').isString().withMessage('Hora de início inválido'),
  body('finishTime').isString().withMessage('Hora de finalização inválido'),
  body('street').isString().withMessage('Rua inválida'),
  body('streetNumber').isString().withMessage('Rua inválida'),
];

export const deleteEventValidator = [
  param('id').isInt().withMessage('ID inválido'),
];

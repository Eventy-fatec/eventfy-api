import { body, param } from 'express-validator';

export const createUserValidator = [
  body('email').isEmail().withMessage('Email inválido'),
  body('name').isString().withMessage('Nome inválido'),
  body('cpf').isString().withMessage('CPF inválido'),
  body('birthdate').isDate().withMessage('Data de nascimento inválido'),
];

export const updateUserValidator = [
  body('email').isEmail().withMessage('Email inválido'),
  body('name').isString().withMessage('Nome inválido'),
  body('cpf').isString().withMessage('CPF inválido'),
  body('birthdate').isDate().withMessage('Data de nascimento inválido'),
];

export const deleteUserValidator = [
  param('id').isInt().withMessage('ID inválido'),
];

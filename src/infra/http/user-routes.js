const { Router } = require('express');
const { listUsers } = require('../../business/users/list-users');
const { findUser } = require('../../business/users/find-user');
const { createUsers } = require('../../business/users/create-users');
const { updateUsers } = require('../../business/users/update-users ');
const { validateCreateUserMissingFields } = require('../../business/users/validations/create-user.validation');
const { validateUpdateUserMissingFields } = require('../../business/users/validations/update-user.validation');

const userRoutes = Router();
userRoutes.get('/users', async (req, res) => {
  const users = await listUsers();
  return res.json(users)
})

userRoutes.get('/users/:id', async (req, res) => {
  const user = await findUser(req.params.id);
  return res.json(user)
})

userRoutes.post('/users', async (req, res) => {
  const missingFields = validateCreateUserMissingFields(req.body);
  if(missingFields.length){
    return res.status(400).json({ error: missingFields.join(', ') + ' are required' })
  }
  return res.json(await createUsers(req.body))
})

userRoutes.put('/users/:id', async (req, res) => {
  const missingFields = validateUpdateUserMissingFields(req.body);
  if(missingFields.length){
    return res.status(400).json({ error: missingFields.join(', ') + ' are required' })
  }
  return res.json(await updateUsers({ id: req.params.id, ...req.body }))
})

module.exports = { userRoutes }

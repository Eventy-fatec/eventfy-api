const { Router } = require('express');
const { userRoutes } = require('./user-routes');
const express  = require('express');

const routes = Router();
routes.use(express.json())
routes.use(userRoutes)

module.exports = { routes }

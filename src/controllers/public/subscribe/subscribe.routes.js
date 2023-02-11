const Router = require('express').Router();
const Controllers = require('./subscribe.controllers')

Router.post('/subscribe', Controllers.addSubscriptionController);

module.exports = Router;
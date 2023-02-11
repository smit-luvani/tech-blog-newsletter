const Router = require('express').Router();
const Controllers = require('./subscribe.controllers')

Router.get('/get', Controllers.getSubscriptionListController);

module.exports = Router;
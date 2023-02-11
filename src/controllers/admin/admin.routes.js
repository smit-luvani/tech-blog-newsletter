const Router = require('express').Router();

Router.use('/newsletter', require('./subscribe/subscribe.routes'));

module.exports = Router;
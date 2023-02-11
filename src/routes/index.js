const Router = require('express').Router();

const PublicRouter = require('../controllers/public/public.routes')
const AdminRouter = require('../controllers/admin/admin.routes')

Router.use('/public', PublicRouter);
Router.use('/admin', AdminRouter);
module.exports = Router;
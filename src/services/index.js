/**
 * @author Smit Luvani
 * @description Distribute All Service to Application
 * - Remove comment from below line to use service
 * - Enable/Disable Service wise Logging in config/default.js file
 */

module.exports.winston = require('./winston')
module.exports.postgres = require('./postgres')
// module.exports.nodemailer = require('./nodemailer')
// module.exports.nodemailerSendGrid = require('./nodemailer/sendgrid')
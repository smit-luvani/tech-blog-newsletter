/**
 * @author Smit Luvani
 * @description Postgres DB connection
 * @module https://www.npmjs.com/package/postgres
 */

const { Client } = require('pg');
const logger = require('../winston')

const PostgresClient = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
});

PostgresClient.connect((error) => error ? logger.error('Service [Postgres]: ' + error.message) : null);

/**
 * @returns {Client}
 */
module.exports = PostgresClient;
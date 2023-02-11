const httpStatus = require("http-status");
const { isUndefined, isEmpty } = require("lodash");
const { promiseHelper } = require("../../../helpers");
const { postgres } = require("../../../services");
const { regexValidateUtil } = require("../../../utils");

/**
 * @author Smit Luvani
 * @description It will create subscription Record
 * @param {Object} data
 * @param {String} data.email
 * @param {String} data.subscriber_name
 * @param {String} data.frequency
 * @param {String} data.country
 * @returns {Promise<import("../../../helpers/promise-return.helpers").PromiseReturn>}
 */
const addSubscription = (data) => new Promise(async (resolve, reject) => {

    var { email, subscriber_name, frequency, country } = data;

    if (isUndefined(email) || isEmpty(email) || !await regexValidateUtil.email(email)) {
        return reject(promiseHelper(httpStatus.BAD_REQUEST, 'Invalid Email'));
    }

    email = String(email).toLowerCase().trim();

    if (isUndefined(subscriber_name) || isEmpty(subscriber_name)) {
        return reject(promiseHelper(httpStatus.BAD_REQUEST, 'Invalid Subscriber Name'));
    }

    if (isUndefined(frequency) || isEmpty(frequency)) {
        return reject(promiseHelper(httpStatus.BAD_REQUEST, 'Invalid Frequency'));
    }

    if (!['daily', 'weekly', 'monthly'].includes(frequency)) {
        return reject(promiseHelper(httpStatus.BAD_REQUEST, 'Invalid Frequency', { valid_frequency: ['daily', 'weekly', 'monthly'] }));
    }

    if (isUndefined(country) || isEmpty(country)) {
        return reject(promiseHelper(httpStatus.BAD_REQUEST, 'Invalid Country'));
    }

    // SQL Query
    const query = `INSERT INTO PUBLIC.SUBSCRIPTIONS (EMAIL,SUBSCRIBER_NAME,FREQUENCY,COUNTRY) VALUES ('${email}', '${subscriber_name}', '${frequency}', '${country}') RETURNING *;`;

    // Execute Query
    postgres.query(query).then((result) => {
        resolve(promiseHelper(httpStatus.CREATED, 'Subscription Created Successfully', result.rows));
    }).catch((error) => {
        reject(promiseHelper(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error', error));
    });
});

module.exports.addSubscription = addSubscription;
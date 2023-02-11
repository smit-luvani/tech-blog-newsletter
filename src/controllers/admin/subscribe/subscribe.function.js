const httpStatus = require("http-status");
const { promiseHelper } = require("../../../helpers");
const { postgres } = require("../../../services");

/**
 * @author Smit Luvani
 * @description It return all subscription
 * @returns {Promise<import("../../../helpers/promise-return.helpers").PromiseReturn>}
 */
const getSubscription = () => new Promise(async (resolve, reject) => {

    // SQL Query
    const query = `SELECT * FROM subscriptions`;

    // Execute Query
    postgres.query(query).then((result) => {
        resolve(promiseHelper(httpStatus.OK, 'success', result.rows));
    }).catch((error) => {
        reject(promiseHelper(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error', error));
    });
});
module.exports.getSubscription = getSubscription;
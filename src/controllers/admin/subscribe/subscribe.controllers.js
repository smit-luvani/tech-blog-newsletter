const { responseHelper } = require("../../../helpers")
const { getSubscription } = require("./subscribe.function")

module.exports.getSubscriptionListController = (req, res) => {

    getSubscription()
        .then(result => responseHelper(res, result.status, result.message, result.data))
        .catch(error => responseHelper(res, error.status, error.message, error.data))
}
const { responseHelper } = require("../../../helpers")
const { addSubscription } = require("./subscribe.function")

module.exports.addSubscriptionController = (req, res) => {

    addSubscription(req.body)
        .then(result => responseHelper(res, result.status, result.message, result.data))
        .catch(error => responseHelper(res, error.status, error.message, error.data))
}
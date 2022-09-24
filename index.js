const axios = require('axios');

const endPoint = 'http://192.168.1.198:8000/api/v1';

let apiKey = '';

function callback(result) {
    return result;
}


/**
 * Set api key of user.
 * @param { string } key - generated key in panel.
 */
exports.setApiKey = (key) => {
    apiKey = key
    return {'message': 'Apikey successfully set', apiKey}
}


/**
 * Send single sms to user.
 * @param { string } sender - line for send.
 * @param { string } text - text for send.
 * @param { string } receptor - target user phone number.
 */
exports.sendSingleSms = async (sender, text, receptor) => {
    const body = {sender, text: message, receptor}
    return await axios.get(endPoint + `/${apiKey}/send`, {params: body}).then(res => res.data).catch(err => err.response.data);
}

/**
 * Send single sms to multiple users.
 * @param { string } sender - line for send.
 * @param { string } text - text for send.
 * @param { Array } receptors - list of target users phone number.
 */
exports.sendMultipleSms = async (sender, text, receptors) => {
    const body = {sender, text, receptors}
    return await axios.post(endPoint + `/${apiKey}/sendGroup`, body).then(res => res.data).catch(err => err.response.data);
}

/**
 * Send pair to pair sms to.
 * @param { string } sender - line for send.
 * @param { array[{text: '', receptor: ''}] } pairs - list of text and receptors message.
 */
exports.sendPairToPairSms = async (sender, pairs) => {
    const body = {sender, messages: pairs}
    return await axios.post(endPoint + `/${apiKey}/sendPair`, body).then(res => res.data).catch(err => err.response.data);
}

/**
 * Send sms with pattern.
 * @param { string } sender - line for send.
 * @param { string } patternId - selected pattern id.
 * @param { array } patternParams - pattern parameters.
 * @param { Array } receptors - list of target users phone number.
 */
exports.sendMessageWithPattern = async (sender, patternId, patternParams, receptors) => {
    const body = {sender, pattern_id: patternId, pattern_params: patternParams, receptors}
    return await axios.post(endPoint + `/${apiKey}/messages/send-pattern`, body).then(res => res.data).catch(err => err.response.data);
}

/**
 * Get account credit
 */
exports.getAccountCredit = async function () {
    return await axios.get(endPoint + `/${apiKey}/credit`).then(res => res.data).catch(err => err.response.data);
}


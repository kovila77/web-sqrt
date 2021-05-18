const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI('DEMO-APPID');

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({message: waApi.getFull('sin x')})
    };
}
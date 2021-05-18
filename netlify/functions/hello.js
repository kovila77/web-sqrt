const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI('2J9EYY-4LE93R34PJ');

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({message: waApi.getFull('sin x')})
    };
}
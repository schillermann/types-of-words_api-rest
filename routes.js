
exports.sentence = function (request, response) {

    const typesOfWords = require('./services/types-of-words');
    const sentenceWithTypesOfWords = typesOfWords.getTypesOfWords(request.params.sentence);

    response.send(JSON.stringify(sentenceWithTypesOfWords));
}
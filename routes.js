
exports.sentence = function (request, response) {

    request.check

    const language = request.params.language;
    const languageCodeList = require('./models/language-code-list.json');

    if(languageCodeList.indexOf(language) == -1) {
        response.status(422).send({error: 'invalid language'});
        return;
    }

    const typesOfWords = require('./services/types-of-words');
    const sentenceWithTypesOfWords = typesOfWords.getTypesOfWords(encodeURI(request.params.sentence));

    response.send(JSON.stringify(sentenceWithTypesOfWords));
}
"use strict"
const routes = require('./routes');
const express = require('express');
const app = express();

app.get('/:language/sentence/:sentence', routes.sentence);

app.listen(3000, function() {
    console.log('REST API listening on port 3000!');
});


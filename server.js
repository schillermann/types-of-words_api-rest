"use strict"
const routes = require('./routes');
const express = require('express');
const app = express();

app.get('/sentence/:sentence', routes.sentence);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});


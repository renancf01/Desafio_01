const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require ('./routes/index');
const fileConverter = require('./files/fileConvert')

app.use('/', indexRoute);
app.use('/fileConvert', fileConverter);

app.listen(3000);

module.exports = app;
const express = require('express');
const app = express();


app.set('view engine', 'ejs');

const indexRoute = require ('./routes/index');
const fileConverter = require('./files/fileConvert');


app.use('/', indexRoute);
app.use('/fileConvert', fileConverter);



app.listen(3000);

module.exports = app;
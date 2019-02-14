let express = require('express');
let app = express();
let modules = require('./modules');
let bodyparser = require('body-parser');
let logger = require('morgan');
let apiRouter = require('./api/v1');

//write your logic here
app.use(logger('tiny'));

modules.initializeMongooseConnection();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/api/v1/', apiRouter);

app.use((req, res) => {
    let err = {
        message: 'Invalid route',
        status: 404
    }
    res.status(err.status).send(err);
});

module.exports = app;
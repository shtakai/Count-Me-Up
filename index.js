const express    = require('express');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const mongoose   = require('mongoose');
const routes     = require('./config/routes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/polling');

app.use('/api', routes);
app.listen(3000, () => console.log('Server has started on port 3000'));

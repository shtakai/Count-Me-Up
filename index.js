const express    = require('express');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const mongoose   = require('mongoose');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// fetching the results
app.get('/api', (req, res) => {
  return res.status(200).json({ message: 'success' });
});
// posting a new vote
app.post('/api', (req, res) => {
  return res.status(200).json({ message: 'success' });
});

app.listen(3000, () => console.log('Server has started on port 3000'));

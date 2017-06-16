const express    = require('express');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const mongoose   = require('mongoose');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// fetching the results
app
    .get('/api', (req, res) => {
      return res.status(200).json({ message: 'success' })
    })
    .post('/api', (req, res) => {
      return res.status(200).json({ message: 'success' })
    })
    .listen(3000, () => console.log('Server has started on port 3000'))


// TODO
// user model which consists of username and votes
//      {
//           username: string
//           votes: array of string
//      }
// candidates model which consists of candidates and number of votes
//      {
//          candidate: string
//          numOfVotes: number
//      }
// controllers
    // update method for when receiving a new vote
    // show for specific user
    // index for candidates


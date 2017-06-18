module.exports = {
    index: usersIndex,
    update: usersUpdate
};

const User      = require('../models/user');
const Candidate = require('../models/candidate');
const mongoose   = require('mongoose');
mongoose.Promise = Promise;

function usersIndex (req, res) {
    User.find((err, users) => {
       if (err) return res.status(500).json({ message: 'Something went wrong' });
       return res.status(200).json(users);
    });
}

function usersUpdate(req, res) {
  User.findOne({username: req.body.username}).exec()
    .then( user => {
      if (!user) return res.status(404).json({ message: 'User not found.'});
      updateCandidate(req);
      user.votes.push(req.body.votes);
      return user;
    })
    .then(user => {
      User.findOneAndUpdate({ username: user.username }, user, { new: true }, (err, user) => {
          if (err) return res.status(500).json({ message: 'Something went wrong.'});
          if (user.votes.length > 3) return res.status(403).json({ message: 'Vote not registered. Number of allowed votes exceeded.'});
          return res.status(201).json({ message: 'Thank you for your vote.', user});
      });
    });
}

function updateCandidate(req) {
  Candidate.findOne({ name: req.body.votes }, (err, candidate) => {
    candidate.votes++;
    Candidate.findOneAndUpdate({ name: req.body.votes }, candidate, { new: true }, (err, candidate) => {
      if (err) return res.status(500).json({ message: 'Something went wrong.' });
    });
  })
}

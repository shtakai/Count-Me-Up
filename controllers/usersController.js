module.exports = {
    index: usersIndex,
    update: usersUpdate
};

const User      = require('../models/user');
// const Candidate = require('../models/candidate');

function usersIndex (req, res) {
    User.find((err, users) => {
       if (err) return res.status(500).json({ message: 'Something went wrong' });
       return res.status(200).json(users);
    });
}

function usersUpdate (req, res) {
    User.findOneAndUpdate({ username: req.body.username }, req.body, { new: true }, (err, user) => {
        if (err) return res.status(500).json({ message: 'Something went wrong.'});
        if (!user) return res.status(404).json({ message: 'User not found.'});
        if (req.body.votes.length > 3) return res.status(403).json({ message: 'Vote not registered.'});
        return res.status(201).json({ message: 'Thank you for your vote.', user});
    });
}


// to add when updating

// post only CURRENT vote and push it to votes array
// update candidate's number

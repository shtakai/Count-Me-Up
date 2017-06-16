module.exports = {
    index: usersIndex,
    update: usersUpdate
};

const User = require('../models/user');

function usersIndex (req, res) {
    User.find((err, users) => {
       if (err) return res.status(500).json({ 'Something went wrong'});
       return res.status(200).json(users)
    });
}

function usersUpdate (req, res) {
    // update users by incrementing votes
    User.findOneAndUpdate({ name: req.body.username }, req.body, { new: true }, (err, user) => {
        if (err) return res.status(500).json({ message: 'Something went wrong.'});
        if (!user) return res.status(404).json({ message: 'User not found.'});
        if (req.body.votes > 3) return res.status(403).json({ message: 'Vote not registered.'});
        return res.status(201).json({ message: 'Thank you for your vote.'});
    });
}
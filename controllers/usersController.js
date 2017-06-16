module.exports = {
    index: usersIndex,
    update: usersUpdate
};

const User = require('../models/user');

function usersIndex (req, res) {
    // return all users
}

function usersUpdate (req, res) {
    // update users by incrementing votes
}
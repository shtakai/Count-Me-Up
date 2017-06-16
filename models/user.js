const mongoose = require('mongoose');

const userSchema = mongoose.schema({
    username: { type: String, trim: true },
    votes: [{ type: String }]
});

module.exports = mongoose.model('User', userSchema);
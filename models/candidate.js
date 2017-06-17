const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
    name: { type: String, trim: true },
    votes: { type: Number }
});

module.exports = mongoose.model('Candidate', candidateSchema);

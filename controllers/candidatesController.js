module.exports = {
    index: candidatesIndex
};

const Candidate = require('../models/candidate');

function candidatesIndex (req, res) {
    Candidate.find((err, candidates) => {
       if (err) return res.status(500).json({ 'Something went wrong.' });
       return res.status(200).json(candidates)
    });
}

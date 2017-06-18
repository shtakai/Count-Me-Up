module.exports = {
    index: candidatesIndex
};

const Candidate = require('../models/candidate');

// outputs all the candidates in descending order based on their votes
function candidatesIndex (req, res) {
    Candidate.find((err, candidates) => {
       if (err) return res.status(500).json({ message: 'Something went wrong.' });
       sortCandidates(candidates);
       return res.status(200).json(candidates.map(candidate => {
         return {
           candidate: candidate.name,
           votes: candidate.votes
         }
       }));
    });
}

function sortCandidates(candidates) {
  candidates.sort((one, two) => {
    return one.votes < two.votes;
  });
}

const mongoose  = require('mongoose');
const User      = require('../models/user');
const Candidate = require('../models/candidate');
const async     = require('async');

mongoose.connect('mongodb://localhost/polling');

// using async to avoid asynch creation
// not really necessary in this particular case as I hardcoded the number of votes but if we updated candidates with user's votes we'd need candidates to be created first
async.waterfall([
    function clearCollections(done) {
        User.collection.drop();
        Candidate.collection.drop();
        console.log('collections dropped')
        return done();
    },
    function createCandidates(done) {
        Candidate.create([
            {
                name: 'A',
                votes: 4
            },
            {
                name: 'B',
                votes: 2
            },
            {
                name: 'C',
                votes: 1
            },
            {
                name: 'D',
                votes: 0
            }
        ], function(err, candidates) {
           if (err) {
             console.log('err', err);
             return done(err);
           }
           console.log('Candidates created.');
           return done(null);
        });
    },
    function createUsers(done) {
      User.create([
        {
          username: 'A',
          votes: []
        },
        {
          username: 'B',
          votes: ['A', 'A']
        },
        {
          username: 'C',
          votes: ['A', 'C']
        },
        {
          username: 'D',
          votes: ['A', 'B', 'B']
        }
      ], function(err, users) {
        if (err) return done(err)
        console.log('Users created.');
        return done(null)
      });
    }
],
function finish(err) {
  if (err) {
    console.log('Error', err);
    return process.exit();
  } else {
    console.log('Done!');
    return process.exit();
  }
});

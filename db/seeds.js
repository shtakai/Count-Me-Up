const mongoose  = require('mongoose');
const User      = require('../models/user');
const Candidate = require('../models/candidate');
const async     = require('async');

// add a few users and candidates

async.waterfall([
    function clearCollections(done) {
        User.collection.drop();
        Candidate.collection.drop();
        return done();
    },
    function createCandidates(done) {
        Candidate.create([
            {
                name: 'A',
                votes: 0
            },
            {
                name: 'B',
                votes: 0
            },
            {
                name: 'C',
                votes: 0
            },
            {
                name: 'D',
                votes: 0
            }
        ], function(err, candidates) {
           if (err) return done(err);
           console.log(`${candidates.lenght} candidates were created`);
           return done(null, candidates);
        });
    }
    // create function to create users
    // update candidates vote according to votes by users
]);
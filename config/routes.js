const express    = require('express');
const router     = express.Router();
const users      = require('../controllers/usersController');
const candidates = require('../controllers/candidatesController');

router.route('/users')
  .get(users.index)
  .put(users.update);

router.route('/candidates')
  .get(candidates.index);

module.exports = router;

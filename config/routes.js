const express    = require('express');
const router     = express.Router();
const users      = require('../controllers/usersController');
const candidates = require('../controllers/candidatesController');

// router.route('/api/users')
//     .get()               //user controllers here
// router.route('/api/users/:id')   // maybe not - check controller update func!
// .patch() or .put()   //user controller here

// router.route('/api/candidates')
//     .get()               // shows the candidates and votes


router.route('/users')
  .get(users.index)
  .put(users.update);

router.route('/candidates').get(candidates.index);

module.exports = router;

const express = require('express');
const router  = express.Router();

// router.route('/api/users')
//     .get()               //user controllers here
// router.route('/api/users/:id')   // maybe not - check controller update func!
// .patch() or .put()   //user controller here

// router.route('/api/candidates')
//     .get()               // shows the candidates and votes


router.route('/users').get((req, res) => {
  return res.status(200).json({ message: 'success'});
});

module.exports = router;

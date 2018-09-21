const router = require('express').Router();
const lumenDataUserController = require('./controllers/controllers');

router
  .get('/userdata', lumenDataUserController.getUser);
router.get('/*', () => {
  this.status = 404;
});

module.exports = router;

const router = require('express').Router();
const lumenDataUserController = require('./controllers/controllers');

router
  .get('/', lumenDataUserController.getLumenUserData);
router.get('/*', () => {
  this.status = 404;
});

module.exports = router;

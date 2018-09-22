const router = require('express').Router();
const lumenDataUserController = require('./controllers/controllers');

router
  .get('/', lumenDataUserController.getUser);
router.get('/*', () => {
  this.status = 404;
});

router.put('/addPoint/:id', lumenDataUserController.addPoint);
router.put('/removePoint/:id', lumenDataUserController.removePoint);


module.exports = router;

// post
// delete

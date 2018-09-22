const router = require('express').Router();
const lumenDataUserController = require('./controllers/controllers');

router
  .get('/', lumenDataUserController.getUser);
router.get('/*', () => {
  this.status = 404;
});

router.put('/addPoint/:id', lumenDataUserController.addPoint);
router.put('/removePoint/:id', lumenDataUserController.removePoint);
router.put('/addNote/:id', lumenDataUserController.addNote);
router.put('/addListItem/:id', lumenDataUserController.addListItem);

module.exports = router;

// post
// delete

const router = require('express').Router();
const lumenDataUserController = require('./controllers/controllers');

router
  .get('/', lumenDataUserController.getUser);
router.get('/*', () => {
  this.status = 404;
});


router.put('/addPoint/:id', lumenDataUserController.addPoint);
// router.put('/:id/:what/up', lumenDataUserController.addPoint);
// router.put('/:id/:what/down', lumenDataUserController.substractPoint);
router.put('/addSmilePoint');
router.put('/addDonationPoint', lumenDataUserController.addDonationPoint);

module.exports = router;

// post
// delete

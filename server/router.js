const router = require('express').Router();
const lumenDataUserController = require('./controllers/controllers');

router
  .get('/', lumenDataUserController.getUser);
router.get('/*', () => {
  this.status = 404;
});
router.put('/addGoodActionPoint/:id', lumenDataUserController.addGoodActionPoint);
router.put('/addSmilePoint', lumenDataUserController.addSmilePoint);
router.put('/addDonationPoint', lumenDataUserController.addDonationPoint);

module.exports = router;

// post
// delete

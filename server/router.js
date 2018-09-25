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
router.put('/addDonation/:id', lumenDataUserController.addDonation);
router.put('/toggleListItem/:iduser/:id', lumenDataUserController.toggleListItem);
router.delete('/deleteListItem/:idUser/:idList', lumenDataUserController.deleteListItem);
router.delete('/deleteNote/:idUser/:idNote', lumenDataUserController.deleteNote);
router.delete('/deleteDonation/:idUser/:idDonation', lumenDataUserController.deleteDonation);

module.exports = router;

// post
// delete

// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user');
// });

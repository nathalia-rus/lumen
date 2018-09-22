const db = require('../db_');

// GET ALL DATA

exports.getUser = () => { 
  db.User.find().then(results => console.log(results));
  return db.User.find();
};

// UPDATE / CREATE

exports.updateList = (id, req) => {
  db.User.update({ _id: id }, { $push: { list: req.body.data } });
};

exports.updateNotes = (id, req) => {
  db.User.update({ _id: id }, { $push: { notes: req.body.data } });
};

exports.updateDonations = (id, req) => {
  db.User.update({ _id: id },
    {
      $push: {
        donations: {
          amount: req.body.data,
          institution: req.body.data,
        },
      },
    });
};

// SCORES

// exports.addPoint = (id) => {
//   db.User.where({ _id: id }).update({ $inc: { scores: { goodActions: 1 } } });
// };


exports.addPoint = (id, what) => {
  db.User.where({ _id: id }).update({ $inc: { scores: { [what]: 1 } } });
};

exports.addSmilePoint = (id) => {
  db.User.where({ _id: id }).update({ $inc: { scores: { smiles: 1 } } });
};

exports.addDonationPoint = (id) => {
  db.User.where({ _id: id }).update({ $inc: { scores: { donations: 1 } } });
};

// or

/* exports.addGoodActionPoint = (id) => {
  db.User.findById(id, function (err, topic) {
    if (err) return console.log(err);

    User.score.goodActions ++;
    User.save(function (err, updatedScore) {
      if (err) return console.log(err);
    });
  });
} */

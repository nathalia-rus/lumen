const db = require('../db');

// GET ALL


/* exports.getUser = () => {
  return new Promise((resolve, reject) => {
    db.User.find({}, (err, User) => {
      if (err) reject(err);
      resolve(User);
    });
  });
}; */

exports.getUser = () => {
  console.log(db);
  db.User.find().then(results => console.log(results));
  return db.User.find();
};

// UPDATE / CREATE

exports.updateLumenUserList = (id, req) => {
  db.User.update({ _id: id }, { $push: { list: req.body.data } });
};

exports.updateLumenUserNotes = (id, req) => {
  db.User.update({ _id: id }, { $push: { notes: req.body.data } });
};

exports.updateLumenUserDonations = (id, req) => {
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

exports.addGoodActionPoint = (id) => {
  db.User.where({ _id: id }).update({ $inc: { scores: { goodActions: 1 } } }, function (
    err,
    doc
  ) { });
};

exports.addSmilesPoint = id => {
  db.User.where({ _id: id }).update({ $inc: { scores: { smiles: 1 } } }, function (
    err,
    doc
  ) { });
};

exports.addDonationsPoint = id => {
  db.User.where({ _id: id }).update({ $inc: { scores: { donations: 1 } } }, function (
    err,
    doc
  ) { });
};

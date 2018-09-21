const db = require('../db_');

// GET ALL DATA

exports.getUser = () => {
  console.log(db);
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

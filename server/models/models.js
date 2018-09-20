const db = require("../db");


// GET ALL

exports.getLumenUserData = () => {
  return new Promise((resolve, reject) => {
    db.LumenUserData.find({}, function (err, lumenUserData) {
      if (err) reject(err);
      resolve(lumenUserData)
    });
  });
};

// UPDATE / CREATE

exports.updateLumenUserList = (id, req) => {
  db.LumenUserData.update({ _id: id }, { $push: { list: req.body.data } })
};

exports.updateLumenUserNotes = (id, req) => {
  db.LumenUserData.update({ _id: id }, { $push: { notes: req.body.data } });
};

exports.updateLumenUserDonations = (id, req) => {
  db.LumenUserData.update({ _id: id },
    {
      $push: {
        donations: {
          amount: req.body.data,
          institution: req.body.data,
        },
      },
    });
};

// DELETE
// not that, just temp lead
// exports.deleteItem = id => {
//   db.Topics.deleteOne({ _id: id }, function (err, res) {
//     if (err) reject(err);
//   });
// };


// SCORES

exports.addGoodActionPoint = id => {
  db.LumenUserData.where({ _id: id }).update({ $inc: { scores: { goodActions: 1 } } }, function (
    err,
    doc
  ) { });
};

exports.addSmilesPoint = id => {
  db.LumenUserData.where({ _id: id }).update({ $inc: { scores: { smiles: 1 } } }, function (
    err,
    doc
  ) { });
};

exports.addDonationsPoint = id => {
  db.LumenUserData.where({ _id: id }).update({ $inc: { scores: { donations: 1 } } }, function (
    err,
    doc
  ) { });
};

const db = require('../db_');

// GET ALL DATA

exports.getUser = () => {
  // db.User.findOneAndUpdate(
  //   {
  //     _id: '5ba7e0b8de9381f69b1699fe'
  //   },
  //   {
  //   list: [
  //     {
  //       text: 'fifth',
  //     },
  //     {
  //       text: 'sixth',
  //     },
  //   ],
  // }).exec();
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

exports.addPoint = (id, what) => {
  db.User.where({ _id: id }).update({ $inc: { scores: { [what]: 1 } } });
};

exports.removePoint = (id, what) => {
  db.User.where({ _id: id }).update({ $inc: { scores: { [what]: -1 } } });
};

exports.addListItem = (id, textAdded) => {
  console.log(textAdded);
  db.User.where({ _id: id }).update({ $push: { list: { text: textAdded } } });
};

exports.addNote = (id, note) => {
  console.log(note);
  db.User.where({ _id: id }).update({ $push: { notes: note } });
};

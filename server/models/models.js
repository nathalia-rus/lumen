const db = require('../db_');

// GET ALL DATA
let randomId = () => (Math.floor(Math.random() * 50) + Math.random());

exports.getUser = () => {
  db.User.find().then(results => console.log(results));
  return db.User.find();
};

// SCORES

exports.addPoint = async (id, what) => {
  if (what === 'goodActions') {
    await db.User.updateOne(
      { _id: id },
      { $inc: { 'scores.goodActions': 1 } },
    );
  } else if (what === 'smiles') {
    await db.User.updateOne(
      { _id: id },
      { $inc: { 'scores.smiles': 1 } },
    );
  }
};

exports.removePoint = async (id, what) => {
  if (what === 'goodActions') {
    await db.User.updateOne(
      { _id: id },
      { $inc: { 'scores.goodActions': -1 } },
    );
  } else if (what === 'smiles') {
    await db.User.updateOne(
      { _id: id },
      { $inc: { 'scores.smiles': -1 } },
    );
  }
};

exports.addListItem = (id, textAdded) => {
  return db.User.update(
    { _id: id },
    { $push: { list: { text: textAdded, id: randomId() } } },
  );
};

exports.addNote = (id, toAdd) => {
  return db.User.update(
    { _id: id },
    { $push: { notes: { text: toAdd, id: randomId() } } },
  );
};

exports.addDonation = (idUser, addAmount, addInstitution) => {
  return db.User.updateOne(
    { _id: idUser },
    { $push: { donations: { id: randomId(), amount: addAmount, institution: addInstitution } } },
  );
};

exports.deleteDonation = (req) => {
  const { idUser, idDonation } = req.params;
  return db.User.updateOne(
    { _id: idUser },
    { $pull: { donations: { id: idDonation } } },
  );
};

exports.deleteListItem = (req) => {
  const { idUser, idList } = req.params;
  return db.User.updateOne(
    { _id: idUser },
    { $pull: { list: { id: idList } } },
  );
};
exports.deleteNote = (req) => {
  const { idUser, idNote } = req.params;
  return db.User.updateOne(
    { _id: idUser },
    { $pull: { notes: { id: idNote } } },
  );
};

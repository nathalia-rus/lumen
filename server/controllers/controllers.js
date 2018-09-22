const model = require('../models/models');

/*  exports.insertInDb = (req, res) => {
  model.insertInDb().then(data => res.status(200).send(data));
}; */

exports.getUser = (req, res) => {
  model.getUser().then(data => res.status(200).send(data));
};


exports.updateList = async (req, res) => {
  const err = await model.updateList(req.body).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(200);
};

exports.updateNotes = async (req, res) => {
  const err = await model.updateNotes(req.body).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(200);
};

exports.updateDonations = async (req, res) => {
  const err = await model.updateDonations(req.body).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(200);
};

exports.deleteListItem = async (req, res) => {
  const err = await model.deleteListItem(req.body).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(200);
};

exports.deleteNote = async (req, res) => {
  const err = await model.deleteNote(req.body).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(200);
};

exports.deleteDonation = async (req, res) => {
  const err = await model.deleteDonation(req.body).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(200);
};

exports.addGoodActionPoint = async (req, res) => {
  let id = req.params.id;
  model.addGoodActionPoint(id);
  return res.sendStatus(200);
};

exports.addSmilePoint = async (req, res) => {
  let id = req.params.id;
  model.addSmilePoint(id);
  return res.sendStatus(200);
};

exports.addDonationPoint = async (req, res) => {
  let id = req.params.id;
  model.addDonationPoint(id);
  return res.sendStatus(200);
};

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


exports.addPoint = async (req, res) => {
  const { target } = req.query;
  console.log(target);
  const { id } = req.params;
  console.log(id);
  await model.addPoint(id, target);
  return res.sendStatus(200);
};

exports.removePoint = async (req, res) => {
  const { target } = req.query;
  console.log(target);
  const { id } = req.params;
  console.log(id);
  await model.removePoint(id, target);
  return res.sendStatus(200);
};

exports.addListItem = async (req, res) => {
  const { target } = req.query;
  console.log(target);
  const { id } = req.params;
  console.log(id);
  await model.addListItem(id, target);
  return res.sendStatus(200);
};

exports.addNote = async (req, res) => {
  const { target } = req.query;
  console.log(target);
  const { id } = req.params;
  console.log(id);
  await model.addNote(id, target);
  return res.sendStatus(200);
};


// the target = input written on the form
// put as listItem in the model fn arg

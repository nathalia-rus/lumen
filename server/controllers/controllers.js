const model = require('../models/models');

/*  exports.insertInDb = (req, res) => {
  model.insertInDb().then(data => res.status(200).send(data));
}; */

exports.getUser = (req, res) => {
  model.getUser().then(data => res.status(200).send(data));
};

exports.deleteListItem = async (req, res) => {
  const err = await model.deleteListItem(req).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(200);
};

exports.deleteNote = async (req, res) => {
  const err = await model.deleteNote(req).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(200);
};

exports.addPoint = async (req, res) => {
  // const err = await model.addPoint(req).catch(() => true);
  // if (err) return res.sendStatus(500);
  const { target } = req.query;
  const { id } = req.params;
  await model.addPoint(id, target);
  return res.sendStatus(200);
};

exports.removePoint = async (req, res) => {
  const err = await model.removePoint(req).catch(() => true);
  if (err) return res.sendStatus(500);
  const { target } = req.query;
  const { id } = req.params;
  await model.removePoint(id, target);
  return res.sendStatus(200);
};

exports.addDonation = async (req, res) => {
  const { myparam1, myparam2 } = req.query;
  const { id } = req.params;
  await model.addDonation(id, myparam1, myparam2);
  return res.sendStatus(200);
};

exports.deleteDonation = async (req, res) => {
  const err = await model.deleteDonation(req).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(200);
};

exports.addListItem = async (req, res) => {
  const { target } = req.query;
  const { id } = req.params;
  await model.addListItem(id, target);
  return res.sendStatus(200);
};

exports.addNote = async (req, res) => {
  const { target } = req.query;
  const { id } = req.params;
  await model.addNote(id, target);
  return res.sendStatus(200);
};


// the target = input written on the form
// put as listItem in the model fn arg

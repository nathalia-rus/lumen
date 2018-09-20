const model = require('../models/models');

exports.getLumenUserData = (req, res) => {
  model.getLumenUserData().then(data => res.status(200).send(data));
};

exports.updateLumenUserList = async (req, res) => {
  const err = await model.updateLumenUserList(req.body).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(201);
};

exports.updateLumenUserNotes = async (req, res) => {
  const err = await model.updateLumenUserNotes(req.body).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(201);
};

exports.updateLumenUserDonations = async (req, res) => {
  const err = await model.updateLumenUserDonations(req.body).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(201);
};

exports.deleteLumenListItem = async (req, res) => {
  const err = await model.deleteLumenListItem(req.body).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(201);
};

exports.deleteLumenNote = async (req, res) => {
  const err = await model.deleteLumenNote(req.body).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(201);
};

exports.deleteLumenDonation = async (req, res) => {
  const err = await model.deleteLumenDonation(req.body).catch(() => true);
  if (err) return res.sendStatus(500);
  return res.sendStatus(201);
};

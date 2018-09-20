const mongoose = require("mongoose");

const dbURL = 'mongodb://localhost:27017/lumen';

mongoose.connect(dbURL, { useNweUrlParser: true })
  .catch((e) => {
    console.err(e)
  })

const db = mongoose.connection;

// SCHEMA

let lumenUserData = new mongoose.Schema({
  id: String,
  username: String,
  email: String,
  scores: {
    goodActions: Number,
    smiles: Number,
    donations: Number
  },
  list: [String],
  notes: [String],
  donations: [
    {
      amount: Number,
      institution: String
    }
  ]
});


let LumenUserData = mongoose.model("LumenUserData", lumenUserData);

module.exports = { db, lumenUserData, LumenUserData };

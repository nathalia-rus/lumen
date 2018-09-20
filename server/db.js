const mongoose = require("mongoose");

const dbURL = 'mongodb://localhost:27017/lumen';

mongoose.connect(dbURL, { useNweUrlParser: true })
  .catch((e) => {
    console.err(e)
  })

const db = mongoose.connection;

// SCHEMA

let lumen = new mongoose.Schema({
  id: String,
  username: String,
  email: String,
  scores: {
    kindDeeds: Number,
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


let Lumen = mongoose.model("Lumen", lumen);

module.exports = { db, lumen, Lumen };

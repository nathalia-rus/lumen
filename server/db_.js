const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/lumen';

mongoose.connect(dbURL, { useNweUrlParser: true })
  .catch((e) => {
    console.err(e);
  });

const db = mongoose.connection;

// SCHEMA

const userSchema = new mongoose.Schema({
  scores: {
    goodActions: Number,
    smiles: Number,
    donations: Number,
  },
  list: [String],
  notes: [String],
  donations: [
    {
      amount: Number,
      institution: String,
    },
  ],
});


const User = mongoose.model('User', userSchema);
console.log(userSchema.list);
module.exports = { db, userSchema, User };


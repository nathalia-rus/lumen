const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/lumen';

mongoose.connect(dbURL, { useNweUrlParser: true })
  .catch((e) => {
    console.error(e);
  });

const db = mongoose.connection;

// SCHEMA

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  scores: {
    goodActions: { type: Number, default: 0 },
    smiles: { type: Number, default: 0 },
    donations: { type: Number, default: 0 },
  },
  list: [{
    id: Number,
    text: String,
    completed: { type: Boolean, default: false },
  }],
  notes: [{
    id: Number,
    text: String,
  }],
  donations: {
    type: [{
      id: Number,
      amount: Number,
      institution: String,
    },
    ],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = {
  db, userSchema, User,
};

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
  notes: {
    id: String,
    text: String,
  },
  donations: {
    type: { amount: [Number], institution: [String] },
  },
});

const User = mongoose.model('User', userSchema);
console.log(userSchema.list);

/*
const nathalia = new User({
  username: 'nathalia',
  email: 'nathaliarus@live.fr',
  scores: {
    goodActions: 3,
    smiles: 7,
    donations: 10
  },
  list: [
    'share my umbrella on a rainy day',
    'anonymously send flowers to someone',
    'I remember that time when blah blah blah, I should defo do it again!'
  ],
  notes: [
    'Had a lovely time helping out refugees at the NGO',
    'Taught English for children, it was fun, I really loved when blah blah blah',
    'I remember that time when blah blah blah, I should defo do it again!',
  ],
  donations: {
    amount: [5, 5],
    institution: ['Amnesty International', 'Medecins sans frontières']
  },
});

console.log(nathalia);
nathalia.save(); */

module.exports = {
  db, userSchema, User,
};

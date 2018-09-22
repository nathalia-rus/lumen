const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/lumen';

mongoose.connect(dbURL, { useNweUrlParser: true })
  .catch((e) => {
    console.err(e);
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
  list: {
    type: [String],
    default: [
      'add your ideas of kindess here :)',
    ],
  },
  notes: {
    type: [String],
    default: [
      'Had a lovely time helping out refugees at the NGO ',
      'Taught English for children, it was fun, I really loved when...',
      'I remember that time when blah blah blah, I should defo do it again!',
    ],
  },
  donations: {
    type: { amount: [Number], institution: [String] },
    default: [
      {
        amount: [7, 10, 5],
        institution: ['amnesty international', 'Mededins sans frontières', 'WWF'],
      },
    ],
  },
});

// !!! changed there - no S 

/* db.collection('User').insertOne({ notes: 'hello' });
 */

const User = mongoose.model('User', userSchema);
console.log(User.list);




module.exports = {
  db, userSchema, User,
};

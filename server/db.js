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
    goodActions: { type: Number, default: 6 },
    smiles: { type: Number, default: 8 },
    donations: { type: Number, default: 10 },
  },
  list: {
    type: [String],
    default: [
      'list 1 text blah blah blah',
      'list 2 text blah blah blah',
      'list 3 text blah blah blah',
    ],
  },
  notes: {
    type: [String],
    default: [
      'note 1 text blah blah blah',
      'note 2 text blah blah blah',
      'note 3 text blah blah blah',
    ],
  },
  donations: {
    type: { amount: [Number], institution: [String] },
    default: [
      {
        amount: ['7', '10', '5'],
        institution: ['amnesty international', 'Mededins sans frontières', 'WWF'],
      },
    ],
  },
});

/* db.collection('User').insertOne({ notes: 'hello' });
 */

const User = mongoose.model('User', userSchema);
console.log(User.list);


// const nath = new User(
//   { list: ['hello', 'whatsup', 'bye'] },
// );
// console.log(nath.notes);
// nath.save();
/* console.log(db.nath.find({})); */

// if you save it's ok it creates

module.exports = {
  db, userSchema, User,
};

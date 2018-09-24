const data = require('./mock.json');


// if user: 
// console.log(data); 

// console.log(data.user[0].list);

// if not user:

console.log(data.username);


const array = [{
  scores: { goodActions: 6, smiles: 8, donations: 10 },
  list: ['hello', 'whatsup', 'bye'],
  notes:
    ['note 1 text blah blah blah',
      'note 2 text blah blah blah',
      'note 3 text blah blah blah'],
  _id: 5ba4c9529823203b6d1b0a65,
  donations: [[Object]],
  __v: 0
}];

console.log()


 const nathalia = new User({
   username: 'nathalia',
   email: 'nathaliarus@live.fr',
   scores: {
     goodActions: 3,
     smiles: 7,
     donations: 10
   },
  list: [{
    id: 1,
    text: 'share my umbrella on a rainy day',
    completed: false,
  },
    {
      id: 2,
      text: 'anonymously send flowers to someone',
      completed: true,
    },
    {
      id: 3,
      text: 'Call mom and dad more often.',
      completed: false,
    },
    {
     id: 4,
     text: 'Water my flatmate\'s plants',
     completed: true,
    }
],
  notes: [
    'Had a lovely time helping out refugees at the NGO',
    'Taught English for children, it was fun, I really loved when blah blah blah',
    'I remember that time when blah blah blah, I should defo do it again!',
  ],
  donations: {
    amount: [5, 5],
    institution: ['Amnesty International', 'Medecins sans frontières']
  }
 });
console.log(nathalia.notes);
nathalia.save();
console.log(db.nathalia.find({})); 

// if you save it's ok it creates



const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  scores: {
    goodActions: { type: Number, default: 0 },
    smiles: { type: Number, default: 0 },
    donations: { type: Number, default: 0 },
  },
  list: {
    id: String,
    text: String,
    completed: Boolean,
    // default: [
    //   'add your ideas of kindess here :)',
    // ],
  },
  notes: {
    id: String,
    text: String,
    // default: [
    //   'Revive a story of kindness you have experienced, seen, or took part in :) ',
    // ],
  },
  donations: {
    type: { amount: [Number], institution: [String] },
    // default: [
    //   {
    //     amount: [0],
    //     institution: ['none for now'],
    //   },
    // ],
  },
});
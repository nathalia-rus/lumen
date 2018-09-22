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
  }
 });
console.log(nathalia.notes);
nathalia.save();
console.log(db.nathalia.find({})); 

// if you save it's ok it creates
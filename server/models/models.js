const db = require('../db_');

// GET ALL DATA

exports.getUser = () => {
  // db.User.findOneAndUpdate(
  //   {
  //     _id: '5ba7e0b8de9381f69b1699fe',  
  //   list: [
  //     {
  //       text: 'Get an icecream for a child by the beach',
  //       completed: true,
  //     },
  //     {
  //       text: 'Share my umbrella on a rainy day',
  //     },
  //     {
  //       text: 'Call my parents more often',
  //       completed: true,
  //     },
  //     {
  //       text: 'Go volunteer for an NGO on wednesday',
  //     },

  //   ],
  //     notes: [
  //       {
  //         text: 'Had a lovely time helping out refugees at the NGO, I made touching memories and met incredibly inspiring people'
  //       },
  //       {
  //         text: 'Taught English for children, it was fun, I really loved when the children returned home all smiles and glad to have had fun while learning ton'
  //       },
  //         {
  //         text: 'I hepled clean the Thames last week. It was a great adventure; the waters were sometimes deep and so many stuff were stuck in between rocks. It made me so much more conscious of where I put my stuff after consuming it -I would never ever leave it on the streets or in nature! Truly heartbreaking to see how it damages our environment. I should urge my friends to help cleaning the Thames as well, so they can experience the same realization. '
  //       },
  //     ],
  // }).exec();
  db.User.find().then(results => console.log(results));
  return db.User.find();
};

// UPDATE / CREATE


// exports.updateDonations = (id, req) => {
//   db.User.update({ _id: id },
//     {
//       $push: {
//         donations: {
//           amount: req.body.data,
//           institution: req.body.data,
//         },
//       },
//     });
// };

// SCORES

exports.addPoint = (id, what) => {
  db.User.where({ _id: id }).update({ $inc: { scores: { [what]: 1 } } });
};

exports.removePoint = (id, what) => {
  db.User.where({ _id: id }).update({ $inc: { scores: { [what]: -1 } } });
};

exports.addListItem = (id, textAdded) => {
  console.log(textAdded);
  db.User.where({ _id: id }).update({ $push: { list: { text: textAdded } } });
};

exports.addNote = (id, note) => {
  console.log(note);
  db.User.where({ _id: id }).update({ $push: { notes: note } });
};

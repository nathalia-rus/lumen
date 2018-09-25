  db.User.findOneAndUpdate(
    {
      _id: '5baa0be04abac5659d18623b',
      username: 'nathalia',
      email: 'nathaliarus@live.fr',
      scores: {
        goodActions: 3,
        smiles: 7,
        donations: 10
      }, 
    list: [
      {
        id: 1,
        text: 'Get an icecream for a child by the beach',
        completed: true,
      },
      {
        id: 2,
        text: 'Share my umbrella on a rainy day',
      },
      {
        text: 'Call my parents more often',
      },
      {
      id: 3,
        text: 'Go volunteer for an NGO on wednesday',
        completed: false,
      },
      {
          id: 4,
        text: 'Bake cakes for my neighbours',
        completed: true,
      },
    ],
      notes: [
        {
          id: 1,
          text: 'Had a lovely time helping out refugees at the NGO, I made touching memories and met incredibly inspiring people'
        },
        {
              id: 2,
          text: 'Taught English for children, it was fun, I really loved when the children returned home all smiles and glad to have had fun while learning ton'
        },
          {
              id: 3,
          text: 'I hepled clean the Thames last week. It was a great adventure; the waters were sometimes deep and so many stuff were stuck in between rocks. It made me so much more conscious of where I put my stuff after consuming it -I would never ever leave it on the streets or in nature! Truly heartbreaking to see how it damages our environment. I should urge my friends to help cleaning the Thames as well, so they can experience the same realization. '
        },
      ],
  donations: [
  {
          id: 1,
         amount: 4,
     institution: 'Amnesty International',
  },
    {
             id: 2,
         amount: 10,
     institution: 'Médecins sans frontières',
  },
  ]
  }).exec();


db.User.findOneAndUpdate(
  {
    _id: '5baa0be04abac5659d18623b',
    username: 'nathalia',
    email: 'nathaliarus@live.fr',
    list: [
      {
        id: 1,
        text: 'Get an icecream for a child by the beach',
        completed: true,
      },
      {
        id: 2,
        text: 'Share my umbrella on a rainy day',
      },
      {
        text: 'Call my parents more often',
      },
      {
        id: 3,
        text: 'Go volunteer for an NGO on wednesday',
        completed: false,
      },
      {
        id: 4,
        text: 'Bake cakes for my neighbours',
        completed: true,
      },
    ],
    notes: [
      {
        id: 1,
        text: 'Had a lovely time helping out refugees at the NGO, I made touching memories and met incredibly inspiring people'
      },
      {
        id: 2,
        text: 'Taught English for children, it was fun, I really loved when the children returned home all smiles and glad to have had fun while learning ton'
      },
      {
        id: 3,
        text: 'I hepled clean the Thames last week. It was a great adventure; the waters were sometimes deep and so many stuff were stuck in between rocks. It made me so much more conscious of where I put my stuff after consuming it -I would never ever leave it on the streets or in nature! Truly heartbreaking to see how it damages our environment. I should urge my friends to help cleaning the Thames as well, so they can experience the same realization. '
      },
    ],
    donations: [
      {
        id: 1,
        amount: 4,
        institution: 'Amnesty International',
      },
      {
        id: 2,
        amount: 10,
        institution: 'Médecins sans frontières',
      },
    ]
  }).exec();
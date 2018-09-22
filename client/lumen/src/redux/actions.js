
// scores

const getScores = scores => ({
  type: "GET_SCORES",
  scores
});

// amount

// const getAmount = amount => ({
//   type: "GET_AMOUNT",
//   amount
// });

// list

 const createListItem = listItem => ({
  type: "CREATE_LIST_ITEM",
  list: listItem
});
 
const getListItems = list => ({
  type: "GET_LIST_ITEMS",
  list: list
});

// notes

 const createNote = note => ({
  type: "CREATE_NOTE",
  note: note
}); 

const getNotes = notes => ({ 
  type: "GET_NOTES",
  notes: notes
})

// donations

const createDonation = (amount, institution) => ({
  type: "CREATE_DONATION",
  amount: amount,
  institution: institution
});

const getDonations = (amount, institution) => ({
  type: "GET_DONATIONS",
  amount: amount,
  institution: institution
})

const addPoint = (what) => ({
  type: "ADD_POINT",
  what,
})

const removePoint = (what) => ({
  type: "REMOVE_POINT",
  what,
})

 
export { removePoint, addPoint, getScores, createListItem, getListItems, createNote, getNotes, createDonation, getDonations  }


// scores

const getScores = scores => ({
  type: "GET_SCORES",
  scores
});

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


 
export { getScores, createListItem, getListItems, createNote, getNotes, createDonation, getDonations  }

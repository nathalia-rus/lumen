// scores

let nextListItem = 0;

const getScores = scores => ({
  type: "GET_SCORES",
  scores
});

const addPoint = (what) => ({
  type: "ADD_POINT",
  what,
})

const removePoint = (what) => ({
  type: "REMOVE_POINT",
  what,
})

// list

const getListItems = (list) => ({
  type: "GET_LIST_ITEMS",
  list
});

 const addListItem = (listItem) => ({
  type: "ADD_LIST_ITEM",
  listItem
});

// notes

const getNotes = notes => ({ 
  type: "GET_NOTES",
  notes: notes
})

const addNote = (note) => ({
  type: "ADD_NOTE",
  note,
})

// donations

const getDonations = (amount, institution) => ({
  type: "GET_DONATIONS",
  amount: amount,
  institution: institution
})


export { addNote, removePoint, addPoint, getScores, addListItem, getListItems, getNotes, getDonations  }

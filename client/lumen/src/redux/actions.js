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

const getListItems = (id, text, completed) => ({
  type: "GET_LIST_ITEMS",
  id,
  text,
  completed
});


 const createListItem = (listItem) => ({
  type: "CREATE_LIST_ITEM",
  id: nextListItem++,
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




export { addNote, removePoint, addPoint, getScores, createListItem, getListItems, getNotes, getDonations  }

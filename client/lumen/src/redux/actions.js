// scores

let nextListItem = 0;
let nextNote = 0;

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

const addListItem = (text) => {
  console.log('from actions:', text)
  return {
    type: "ADD_LIST_ITEMS",
    text,
    id: nextListItem++,
    completed: false
  }
}

// notes

const getNotes = notes => ({ 
  type: "GET_NOTES",
  notes: notes
})

const addNote = (text) => {
  console.log('ADD NOTE from actions:', text)
  return {
    type: "ADD_NOTES",
    text,
    id: nextNote++,
  }
}

// donations

const getDonations = (amount, institution) => ({
  type: "GET_DONATIONS",
  amount: amount,
  institution: institution
})


export { addNote, removePoint, addPoint, getScores, addListItem, getListItems, getNotes, getDonations  }

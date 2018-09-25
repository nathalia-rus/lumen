// scores

let randomId = () => (Math.floor(Math.random() * 50) + Math.random() );


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
    completed: false,
    idRedux: randomId()
  }
}

const toggleListItem = (id) => {
  return {
    type: "TOGGLE_LIST_ITEM",
    id: id,
  }
}
// notes

const getNotes = notes => ({ 
  type: "GET_NOTES",
  notes: notes
})

const deleteListItem = (id) => {
  return {
    type: "DELETE_LIST_ITEM",
    id: id,
  }
}

const deleteNote = (id) => ({
  type: "DELETE_NOTE",
  id: id
})

const addNote = (text) => {
  console.log('ADD NOTE from actions:', text)
  return {
    type: "ADD_NOTES",
    text,
    id: randomId(),
  }
}

// donations

const getDonations = (donations) => ({
  type: "GET_DONATIONS",
  donations: donations
})
const addDonation = (amount, institution) => ({
  type: "ADD_DONATION",
  id: randomId(),
  amount: amount,
  institution: institution
})
const deleteDonation = (id) => ({
  type: "DELETE_DONATION",
  id: id
})



export { deleteDonation, addDonation, toggleListItem, deleteNote, deleteListItem, addNote, removePoint, addPoint, getScores, addListItem, getListItems, getNotes, getDonations  }


// scores

const getScores = scores => ({
  type: "GET_SCORES",
  scores: scores
});

// list

const createListItem = listItem => ({
  type: "CREATE_LIST_ITEM",
  content: listItem.content
});

const getListItems = listItems => ({
  type: "GET_LIST_ITEMS",
  listItems: listItems
});

// notes

const createNote = note => ({
  type: "CREATE_NOTE",
  content: note.content
});

const getNotes = notes => ({ // notes = in app.js, data.notes passed
  type: "GET_NOTES",
  notes: notes
})

// donations

const createDonation = donation => ({
  type: "CREATE_DONATION",
  amount: donation.amount,
  institution: donation.institution
});

const getDonations = donations => ({
  type: "GET_DONATIONS",
  donations: donations
})

export { getScores, createListItem, getListItems, createNote, getNotes, createDonation, getDonations}

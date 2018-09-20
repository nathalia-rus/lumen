
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

const getNotes = notes => ({
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

export { createListItem, getListItems, createNote, getNotes, createDonation, getDonations}

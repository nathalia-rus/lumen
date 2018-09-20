const model = require("../models/models");

exports.getLumenUserData = (req, res) => {
  model.getLumenUserData().then(data => res.status(200).send(data))
}


// get 

// put

// delete

// get scores
// get list items,
// get notes 
// get donations --> what's the scope tho


// need createListItem
// need createNote
// createDonation
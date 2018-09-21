const db = require("../db_");

exports.getLumenUserData = () => {
  return new Promise((resolve, reject) => {
    db.LumenUserData.find(function (err, lumenUserData) {
      if (err) reject(err);
      resolve(lumenUserData)
    });
  });
};

// when array: push
// https://docs.mongodb.com/manual/reference/operator/update/push/index.html


exports.updateLumenUserList = (req, id) => {
  db.LumenUserData.update({ _id: id }, { $push: { list: req.body.data } })
};

// or

// exports.updateLumenUserList = (id, req) => {
//   db.LumenUserData.where({ _id: id }).update({ $push: { list: req.body.data } }, function (
//     err,
//     doc
//   ) { });
// };



exports.updateLumenUserNotes = (id, req) => {
  db.LumenUserData.update({ _id: id }, { $push: { notes: req.body.data } });
};

exports.updateLumenUserDonations = (id, req) => {
  db.LumenUserData.update({ _id: id },
    {
      $push: {
        donations: {
          amount: req.body.data,
          institution: req.body.data,
        },
      },
    });
};

exports.deleteLumenListItem = function (req, res) {
   db.LumenUserData.findByIdAndRemove(_id, function (err) {
    if (err) return next(err);
    res.send('Deleted successfully!');
  })
};


// filter array and return it cf votes 



/* exports.updateLumenUserNotes = async notes => {
  console.log(notes);
  db.LumenUserData.update({ notes: [...req.body.notes] }), { upsert: true }
}

exports.updateLumenUserDonations = async donations => {
  console.log(donations);
  db.LumenUserData.update({ 
    donations: [ ... { amount: req.body.amount, institution: req.body.institution} ] }), 
  { upsert: true }
}
 */





/* exports.updateLumenUserList = async list => {
  console.log(list);
  db.LumenUserData.update({ list: [...req.body.list] }), { upsert: true };
} */

/* exports.updateLumenUserList = async list => {
  console.log(list);
  db.LumenUserData.update({ list: [...req.body.list] }), { upsert: true };
} 
 */

 /* exports.updateLumenUserList2 = async list => {
  console.log(list);
  db.LumenUserData.insert({
    list: req.body.listItem 
  })
} */




/* exports.deleteLumenListItem = function (req, res) {
  db.LumenUserData.findByIdAndRemove(_id, function (err) {
    if (err) return next(err);
    res.send('Deleted successfully!');
  })
}; */
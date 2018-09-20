const db = require("../db");

exports.getLumenUserData = () => {
  return new Promise((resolve, reject) => {
    db.LumenUserData.find(function (err, lumenUserData) {
      if (err) reject(err);
      resolve(lumenUserData)
    });
  });
};



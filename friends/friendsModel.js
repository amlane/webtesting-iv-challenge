const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

function insert(hobbit) {
  return db("friends")
    .insert(hobbit, "id")
    .then(ids => {
      return db("friends")
        .where({ id: ids[0] })
        .first();
    });
}

function getAll() {
  return db("friends");
}

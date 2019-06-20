const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  getAll,
  remove
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

function remove(id) {
  return db("friends")
    .where({ id })
    .delete();
}

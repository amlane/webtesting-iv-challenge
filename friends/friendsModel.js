const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  getAll,
  remove
};

function insert(friend) {
  return db("friends")
    .insert(friend, "id")
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
  console.log("here", id);
  return db("friends")
    .where({ id })
    .del();
}

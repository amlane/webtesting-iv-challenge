exports.up = function(knex, Promise) {
  return knex.schema.createTable("friends", friends => {
    friends.increments();

    friends.string("name", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("friends");
};

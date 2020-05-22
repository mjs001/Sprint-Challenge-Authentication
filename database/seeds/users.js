exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users2")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users2").insert([
        { id: 1, username: "cat", password: "meow" },
        { id: 2, username: "dog", password: "bark" },
      ]);
    });
};

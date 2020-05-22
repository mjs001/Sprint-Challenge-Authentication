const db = require("../database/connection.js");
module.exports = {
  add,
  findById,
  findBy,
};

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}

function findBy(filter) {
  console.log("filter", filter);
  return db("users as u")
    .where(filter)
    .select("u.id", "u.username", "u.password")
    .orderBy("u.id");
}

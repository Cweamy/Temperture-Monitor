const db = require('../db/knex');

exports.findByEmail = (email) => {
  return db('users').where({ email }).first();
};

exports.createUser = (user) => {
  return db('users').insert(user);
};

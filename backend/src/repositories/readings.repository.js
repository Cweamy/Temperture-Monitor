const db = require('../db/knex');

exports.insert = async (reading) => {
  const [id] = await db('readings').insert(reading);
  return { id, ...reading };
};

exports.findMany = (limit = 100) => {
  return db('readings')
    .orderBy('created_at', 'desc')
    .limit(limit);
};

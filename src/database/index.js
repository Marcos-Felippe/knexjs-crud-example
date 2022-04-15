// Importando as configurações do knex
const kenxconfig = require('../../knexfile');

// Pegando as configurações do knex para development
const knex = require('knex')(kenxconfig['development']);

module.exports = knex;
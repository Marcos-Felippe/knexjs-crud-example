const knex = require('../database');

module.exports = {
    async execute() {
        try {

            const results = await knex('users');
            //.where('deleted_at', null);

            return results;

        } catch (error) {
            return error;
        }
    }
}
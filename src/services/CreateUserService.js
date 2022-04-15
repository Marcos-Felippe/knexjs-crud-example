const knex = require('../database');

module.exports = {
    async execute( username ) {
        try {

            await knex('users').insert({
                username
            });

            return "ok";

        } catch (error) {
            return error;
        }
    }
}
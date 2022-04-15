const knex = require('../database');

module.exports = {
    async execute({ title, user_id }) {
        try {

            await knex('projects').insert({
                title,
                user_id
            });

            return "ok";

        } catch (error) {
            return error;
        }
    }
}
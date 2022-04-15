const knex = require('../database');

module.exports = {
    async execute({ id, username }) {
        try {

            const updated_at = new Date();
            
            await knex('users')
                .update({ username, updated_at })
                .where({ id });

            return "ok";

        } catch (error) {
            return error;
        }
    }
}
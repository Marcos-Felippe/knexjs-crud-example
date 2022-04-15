const knex = require('../database');

module.exports = {
    async execute({ id }) {
        try {

            await knex('users')
                .where({ id })
                .del();
                //.update('deleted_at', new Date());

            return "ok";

        } catch (error) {
            return error;
        }
    }
}
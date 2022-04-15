const knex = require('../database');

module.exports = {
    async execute({ user_id, page }) {
        try {

            const query = knex('projects')
            .limit(5)
            .offset((page - 1) * 5);

            const countObj = knex('projects').count();
            
            if (user_id) {
                query
                .where({ user_id })
                .join('users', 'users.id', '=', 'projects.user_id')
                .select('projects.*', 'users.username');
                //.where('users.deleted_at', null)

                countObj
                .where({ user_id });
            }

            const [count] = await countObj;
            
            const results = await query;
            
            return {results, count};

        } catch (error) {
            return error;
        }
    }
}
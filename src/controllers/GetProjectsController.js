const GetProjectsService = require("../services/GetProjectsService");

module.exports = {
    async handle(req, res, next) { 

        const { user_id, page = 1 } = req.query;

        const service = GetProjectsService;
        const {results, count} = await service.execute({ user_id, page });

        if(results instanceof Error){
            next(results);
        }
        else{
            res.header('X-Total-Count', count["count"] );
            return res.json(results);
        }
    },
}
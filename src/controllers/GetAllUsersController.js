const GetAllUsersService = require('../services/GetUsersService');

module.exports = {
    async handle(req, res, next) { 
        const service = GetAllUsersService;
        const results = await service.execute();

        if(results instanceof Error){
            next(results);
        }
        else{
            return res.json(results);
        }
    },
}
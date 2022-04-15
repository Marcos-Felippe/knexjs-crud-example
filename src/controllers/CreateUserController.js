const CreateUserService = require('../services/CreateUserService');

module.exports = {
    async handle(req, res, next) {

        const { username } = req.body;

        const service = CreateUserService;
        const result = await service.execute( username );

        if(result instanceof Error){
            next(result);
        }
        else{
            return res.status(201).send();
        }
    },
}
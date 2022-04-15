const UpdateUserService = require('../services/UpdateUserService');

module.exports = {
    async handle(req, res, next) {
        const { id } = req.params;
        const { username } = req.body;

        const service = UpdateUserService;
        const result = await service.execute({ id, username });

        if(result instanceof Error){
            next(result);
        }
        else{
            return res.status(201).send();
        }
    },
}
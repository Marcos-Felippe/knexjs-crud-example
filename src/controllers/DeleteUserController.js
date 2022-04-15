const DeleteUserService = require('../services/DeleteUserService');

module.exports = {
    async handle(req, res, next) {
        const { id } = req.params;

        const service = DeleteUserService;
        const result = await service.execute({ id });

        if(result instanceof Error){
            next(result);
        }
        else{
            return res.status(201).send();
        }
    }
}
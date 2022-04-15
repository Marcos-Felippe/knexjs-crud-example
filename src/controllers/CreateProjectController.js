const CreateProjectService = require("../services/CreateProjectService");


module.exports = {
    async handle(req, res, next) {

        const { title, user_id } = req.body;

        const service = CreateProjectService;
        const result = await service.execute({ title, user_id });

        if(result instanceof Error){
            next(result);
        }
        else{
            return res.status(201).send();
        }
    },
}
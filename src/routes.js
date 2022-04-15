const express = require('express');
const routes = express.Router();

const GetAllUsersController = require('./controllers/GetAllUsersController');
const CreateUserController = require('./controllers/CreateUserController');
const UpdateUserController = require('./controllers/UpdateUserController');
const DeleteUserController = require('./controllers/DeleteUserController');

const GetProjectsController = require('./controllers/GetProjectsController');
const CreateProjectController = require('./controllers/CreateProjectController');


routes
    // Users
    .get('/users', GetAllUsersController.handle)
    .post('/users', CreateUserController.handle)
    .put('/users/:id', UpdateUserController.handle)
    .delete('/users/:id', DeleteUserController.handle)
    // Projects
    .get('/projects', GetProjectsController.handle)
    .post('/projects', CreateProjectController.handle);

routes.get('/', (req, res) => {
    res.send('Olá mundo');
});


module.exports = routes;
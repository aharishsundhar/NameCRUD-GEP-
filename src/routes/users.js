const express = require('express');
const route = express.Router();
const user = require('../controllers/user.controllers');


// async and await to use and unique entry

// route.post('/login', user.create);
// route.get('/getAll', user.getall);
// route.get('/get/:id', user.getId);
// route.put('/update/:id', user.updateId);
// route.delete('/:id', user.deleteId);

//promise using and unique entry

route.post('/login', user.create);
route.get('/getAll', user.getAll);
route.get('/get/:id', user.getId);
route.put('/update/:id', user.updateId);
route.delete('/:id', user.deleteId);


module.exports = route
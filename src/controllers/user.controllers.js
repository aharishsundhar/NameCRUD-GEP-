const express = require('express');
const service = require('../services/services')
const controllers = module.exports;


//promise using post user
controllers.create = (req, res) => {
    service.create(req,(data) => {
        if(data == 11000){
            res.status(500).then(res.json({ msg : 'User already exists'}));
        }
        else {
            res.json(data);
        }
    });

}

//promis method
controllers.getAll = (req, res) => {
    service.allUsers(req, (data) => {
        if(data == 11000){
            res.status(500).then(res.json({ msg : 'Server Error'}));
        }
        else{
            res.json(data);
        }
    });
}

//promise
controllers.getId = (req,res) => {
    service.getUser(req, (data) => {
        if(data == 11000){
            res.status(500).then(res.json({ msg : 'User not Found'}));
        }else{
            res.json(data);
        }
    })
}

//promise
controllers.updateId = (req, res) => {
    service.updateId(req, (data) => {
        if(data == 11000){
            res.status(500).then(res.json({ msg : 'Server Error'}));
        }else{
            res.json({msg : 'User Data Updated'});
        }
    });
}

//promise 
controllers.deleteId = (req,res) => {
    service.deleteId(req, (data) => {
        if(data == 11000){
            res.status(500).then(res.json({ msg : 'Invalid Data'}));
        }else{
            res.json(data)
        }
    })
}


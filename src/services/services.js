const express = require('express');
const Dao = require('../dao/dao.promise');
const services = module.exports;


services.create = (req, callback) => {

    Dao.add(req,(data) => {
        callback(data);
    });

}

services.allUsers = (req, callback) => {

    Dao.allUsers(req,(data) => {
        callback(data);
    });

}
services.getUser = (req, callback) => {

    Dao.getUser(req,(data) => {
        callback(data);
    });

}

services.updateId = (req, callback) => {

    Dao.updateUser(req,(data) => {
        callback(data);
    });

}

services.deleteId = (req, callback) => {

    Dao.deleteUser(req,(data) => {
        callback(data);
    });

}
const express = require('express');
const User = require('../models/users')

//promise method
exports.add = (req, send) => {
    let user = new Promise((resolve,reject) =>{
        const { firstname, lastname } = req.body;
        let useradd = new User({
            firstname,
            lastname
        });
        const userName = User.findOne({ firstname });
        if(userName){
            resolve(send(11000));
        }
        else {
            reject(useradd.save());
        }
    });

    user.then((result) => {
        send(result);
    })
}

//promis method
exports.allUsers = (req, allData) => {
    let promises = new Promise((resolve, reject) => {
        if(req){
            resolve(User.find());
        }
        else {
            reject( new Error({ msg: 'Invalid Entry'}))
        }
    });

    promises.then((result)=>{
        allData(result);
    });
}

//promise
exports.getUser = (req, data) => {
    const user = User.findOne({ _id: req.params.id });
        let id = new Promise((resolve,reject) => {
            if(user){
                resolve(user);
            }
            else {
                reject(data(11000));
            }
        });

    id.then((result) => {
        data(result);
    }).catch((err) => {
        data(11000)
    });
}

//promise
exports.updateUser = (req, updateData) => {
    
    let update = new Promise((resolve, reject) => {
        const updateId = { firstname, lastname } = req.body;

        const newUpdate = User.findOneAndUpdate({ _id : req.params.id }, updateId, { new : true });

        if(newUpdate){
            resolve(newUpdate);
        }
        else {
            reject({ msg : 'User not found'});
        }
    });

    update.then((result) => {
        updateData(result);
    });
}


//promise 
exports.deleteUser = (req,deleteData) => {
    let deleteId = new Promise((resolve,reject) => {
        const remove = User.findOne({ _id : req.params.id });

        if(remove){
            resolve(User.findOneAndDelete(remove));
        }
        else{
            reject(new Error({ msg: 'server Error'}));
        }
    });

     deleteId.then((result) => {
         deleteData({ msg : result.firstname + ' is Deleted'});
     }).catch((err) => {
        deleteData(11000);
     });
}
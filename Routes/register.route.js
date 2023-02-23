const express = require('express');
const bcrypt = require('bcrypt');
const { UserModel } = require('../Models/user.model');

const app = express.Router();
app.use(express.json());

app.get('/', (req,res) => {
    res.send('welcome to register route');
});

app.post('/', async (req,res) => {
    const {name, email, password} = req.body;
    try{
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.status(400).send({message:'Something went wrong', error:err});
            } else {
                const user = new UserModel({name, email, password:hash});
                await user.save();
                res.status(201).send({message:'Successfully Created New User', user});
            }
        });
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = app;
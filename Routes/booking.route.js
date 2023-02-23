require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const { BookingModel } = require('../Models/booking.model');

const app = express.Router();
app.use(express.json());

app.get('/', (req,res) => {
    res.send('welcome to bookings route');
});

app.post('/', async (req,res) => {
    const payload = req.body;
    const token = req.headers.authorization;
    try{
        if (token){
            const decode = jwt.verify(token, process.env.secret);
            payload.user = decode.id;
            const bookFlight = new BookingModel(payload);
            await bookFlight.save();
            res.status(201).send({message:'Flight Booked', BookingDetails:bookFlight});
        } else {
            res.status(403).send({message:'Login Required'});
        }
    } catch (err) {
        res.status(403).send({message:'Login Required', err});
    }
});

module.exports = app;
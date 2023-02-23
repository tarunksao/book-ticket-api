const express = require('express');
const { BookingModel } = require('../Models/booking.model');

const app = express.Router();
app.use(express.json());

app.get('/', async (req,res) => {
    try{
        const allBookings = await BookingModel.find().populate('user').populate('flight');
        res.status(200).send({message:'Here is a list of all the Bookings done so far', allBookings});
    } catch (err) {
        res.status(400).send({message:'No Booking found, please book a flight first', err});
    }
});

module.exports = app;
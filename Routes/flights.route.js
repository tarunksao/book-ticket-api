const express = require('express');
const { FlightModel } = require('../Models/flights.model');

const app = express.Router();
app.use(express.json());

app.get('/', async (req,res) => {
    try {
        const getAllFlights = await FlightModel.find();
        if (getAllFlights.length>0){
            res.status(200).send({message:'Here is the list of all the available flights', Flights:getAllFlights});
        } else {
            res.status(400).send({message:'Sorry, No flights available as of now'});
        }
    } catch (err) {
        res.status(404).send({message:'Something went wrong'});
    }
});

app.get('/:id', async (req,res) => {
    const {id} = req.params;
    try{
        const flight = await FlightModel.find({_id:id});
        if (flight.length>0){
            res.status(200).send({message:'Here are the details of the flight you are looking for', flight});
        }
    } catch (err) {
        res.status(400).send({message:'Flight not found', err});
    }
});

app.post('/', async (req,res) => {
    const payload = req.body;
    try{
        const flight = new FlightModel(payload);
        await flight.save();
        res.status(201).send({message:'New Flight Added', flight});
    } catch (err) {
        res.status(400).send({message:'Failed to add a new flight', err});
    }
});

app.patch('/:id', async (req,res) => {
    const {id} = req.params;
    const payload = req.body;
    try {
        const updateFlight = await FlightModel.findByIdAndUpdate({_id:id}, payload);
        res.status(204).send({message:`Flight with id: ${id} updated successfully`});
    } catch (err) {
        res.status(400).send({message:'Flight not found', err});
    }
});

app.delete('/:id', async (req,res) => {
    const {id} = req.params;
    try {
        const deleteFlight = await FlightModel.findByIdAndDelete({_id:id});
        res.status(202).send({message:`Flight with id: ${id} Deleted Successfully`});
    } catch (err) {
        res.status(400).send({message:'Flight not found', err});
    }
});

module.exports = app;
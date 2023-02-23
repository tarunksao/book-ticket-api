const {Schema, model} = require('mongoose');

const flightSchema = Schema({
    airline:{type: String, required:true},
    flightNo:{type: String, required:true, unique:true},
    departure:{type: String, required:true},
    arrival:{type: String, required:true},
    departureTime:{type: Date, required:true},
    arrivalTime:{type: Date, required:true},
    seats:{type: Number, required:true},
    price:{type: Number, required:true}
}, {
    versionKey:false,
});

const FlightModel = model('Flight', flightSchema);

module.exports = {
    FlightModel
};
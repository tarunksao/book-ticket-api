const {Schema, model, Types} = require('mongoose');

const bookingSchema = Schema({
    user : { type: Schema.Types.ObjectId, ref: 'User' },
    flight : { type: Schema.Types.ObjectId, ref: 'Flight' }
}, {
    versionKey:false,
});

const BookingModel = model('Booking', bookingSchema);

module.exports = {
    BookingModel
};
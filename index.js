require('dotenv').config();
const express = require('express');
const cors = require('cors');

const dbConnect = require('./config/db');

const RegisterRoute = require('./Routes/register.route');
const LoginRoute = require('./Routes/login.route');
const FlightsRoute = require('./Routes/flights.route');
const BookingRoute = require('./Routes/booking.route');
const DashboardRoute = require('./Routes/dashboard.route');

const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.use('/api/register', RegisterRoute);
app.use('/api/login', LoginRoute);
app.use('/api/flights', FlightsRoute);
app.use('/api/booking', BookingRoute);
app.use('/api/dashboard', DashboardRoute);

app.get('/', (req,res) => {
    res.send('Welcome to Flight Booking Application');
});

app.listen(PORT, async () => {
    try{
        await dbConnect;
        console.log('Connect to the DB');
    } catch (e) {
        console.log('Error occured while connecting to the DB');
    }
    console.log(`Server is runnning on http://localhost:${PORT}`);
});
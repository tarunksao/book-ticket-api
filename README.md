# Air Ticket Booking API

### Welcome to the Air Ticket Booking API.
This API has been created with the help of MongoAtlas for storing the data.

### Tech Stack used for creating this API are:-
- NodeJS
- ExpressJS
- MongoDB
- Mongoose

### Features or End Points included in this API are:-
- POST      /api/register
- POST      /api/login
- GET       /api/flights
- GET       /api/flights/:id
- POST      /api/flights
- PATCH     /api/flights/:id
- DELETE    /api/flights/:id
- POST      /api/booking
- GET       /api/dashboard

Please use correct Route as well as Method as mentioned above in order to use a particular function of the API.
The use of each Route & Method is explained below.

## POST  /api/register
As the route name suggests, this route will help user to register with the database.
User has to provide certain data in order to successfully register.

        {
            "name": Name of the User (String),
            "email": Email of the user, should be Unique (String)
            "password": Passowrd choosen by user, (User should remember it) (String)
        }

If any of these is not provided while attempting register, user will not be able to register.

## POST  /api/login
As the name suggests, this route will help user for authentication and system will provide a token to the user which will be further needed for booking purpose.
The details required for Loging in are: -

        {
            email:Email provided during Registration (String),
            password:Password entered during registration (String)
        }

Both of these details will be matched with the details entered during registration, and if matching is successfull a token will be generated and provided to the user/system.
If matching fails, then either the details entered are worng, or user had never registered with the database.

## GET   /api/flights
This route along with the method will provide the user with details of all the FLights available in the Database.
If no Flights are available, it will give a message as "Sorry, No FLights available as of now".

## GET    /api/flights/:id
This is a dynamic route with id as a variable in the route. This gives user an opportunity to search for a particular flight if and only if user has the 'id' of that particular flight. He will have to pass that id in th url by replacing ':id' with the flight's 'id'.

## POST /api/flights
This route along with the method can be used to add a new Flight to the databse.
The details that will be needed for adding the new FLight are: -

        {
            "airline": Name of the AirLine Company (Example - Indigo, AirIndia etc) (String),
            "flightNo": Flight Identification Number, Should be unique (String),
            "departure": Start Point of the FLight (String),
            "arrival": End point or Destination of the FLight (String),
            "departureTime": Date and Time of departure from Start point (Date Format),
            "arrivalTime": Date and Time of arrival in Destination (Date Format),
            "seats": Total number of seats in the FLight (Number),
            "price": Cost of each Seat in (Number)
        }

If any of these is not provided while attempting register, new flight will not be added.


## PATCH /api/flights/:id
This is also a dynamic route with id as a variable in the route. This gives user an opportunity to search and update the details of a particular flight if and only if user has the 'id' of that particular flight. He will have to pass that id in th url by replacing ':id' with the flight's 'id' along with the details that he wants to update. But this will not give any message.
- Note: User will have to use the same keys that were used for adding the flight or else it will cause error/problem/confusion when the flights data will be seen again.

## DELETE /api/flights/:id
This is also a dynamic route with id as a variable in the route. This gives user an opportunity to delete a particular flight if and only if user has the 'id' of that particular flight. He will have to pass that id in th url by replacing ':id' with the flight's 'id'. This will give a message as Delete Successful.


## POST  /api/booking
This route shall be entered only after Loging in as user will need to use the Token generated during login in order to book a flight.
If you are using any Software such as POSTMAN or ThunderClient in order to run the API, you will have to put the generated token into headers as: 

                    Authorization: $Token

The $Token here will be replaced by the token provided to user.
This token will be used by server to make the booking for the logined user.
Also, User will have to provide the flight ID he wants to book.

            {
                "flight":The Id of the flight to be booked (String)
            }

## GET   /api/dashboard
This route will give the details of all the Bookings made so far that are present in the Database.
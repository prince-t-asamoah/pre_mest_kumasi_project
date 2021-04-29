const express = require('express');
const appModel = require('../models/userModel');

const appRoutes  = express();

appRoutes.post('/', function(request, response){

});

appRoutes.post('/login', function (request, response) {

});

appRoutes.post('/signup', async function (request, response) {
    const { fullName, email, password1, password2 } = request.body;

    try {
        let newUser = new appModel(
            { fullName, email, password1, password2 }
        );
        console.log(newUser);

        responseData = await newUser.save();
    } catch (error) {
        response.status(400).send({ message: error});
    }
    response.status(200).send(
        { 
            message: "Signed up successful. Login to your account now",
            data: responseData
        }
    );
});

appRoutes.post('/dashboard', function (request, response) {

});

module.exports = appRoutes;
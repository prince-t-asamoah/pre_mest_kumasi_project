const express = require('express');
const appModel = require('../models/userModel');
const {genPass, validPass} = require('../password');


const appRoutes  = express();

//Signup
appRoutes.post('/signup', async function (request, response) {
    const { fullname, email, password } = request.body;
 
    const saltHash = genPass(password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    try {
        const newUser = new appModel({ fullname, email, salt, hash});

        let responseData = await newUser.save();
    } catch (error) {
        response.status(400).send({ message: error });
    }
    response.status(200).send(console.log({ message: "Signup sucessful, logging in now!", data: responseData }));
});

//Login
appRoutes.post('/login', async function (request, response) {
    const { email, password } = request.body;

    try {
       let responseData = await appModel.findOne({ email});

        if (responseData) {
            const isValid = validPass(
                password,
                responseData.salt,
                responseData.hash
            );

            if (isValid) {
                response.status(200).send(console.log({ message: "Login Successful" }));
            } else {
                response.status(400).send(console.log({ message: "Wrong username or password" }));
            }
        } else {
            response.status(400).send(console.log({ message: "User does not exist" }));
        }
    } 
    catch (error) {
        response.status(400).send(console.log(error));
    }

    


});


module.exports = appRoutes;
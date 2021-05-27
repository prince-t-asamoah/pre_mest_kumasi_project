const express = require('express');
const appModel = require('../models/userModel');
const {genPass} = require('../password');


const appRoutes  = express();

//Signup
appRoutes.post('/signup', async function (request, response) {
    const { fullname, email, password } = request.body;

    let responseData = {};
    const saltHash = genPass(password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;


    try {
        let newUser = new appModel({ fullname, email, password, salt, hash});

        responseData = await newUser.save();
    } catch (error) {
        response.status(400).send({ message: error });
    }
    response.status(200).send(console.log({ message: "Signup sucessful, logging in now!", data: responseData }));
});

//Login Route
// appRoutes.post('/login', async function (request, response) {
//     const { email, password } = request.body;

//     // console.log(email);
//     let responseData = await appModel.findOne({ email })
//     console.log(responseData);
//     if (responseData) {
//         if (password === responseData.password) {
//             response.status(200).send({ message: "Successful" })
//         } else {
//             response.status(200).send({ message: "wrong username or password" })
//         }
//     } else {

//         response.status(400).send({ message: "User does not exist" })
//     }


// });


module.exports = appRoutes;
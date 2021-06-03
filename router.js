const express = require('express');

const userModel = require('./users');
const {genPass, validPass} = require('./password');

const appRouter  = express();

//Signup
appRouter.post('/signup', async function (request, response) {
    const { fullname, email, password } = request.body;
 
    const saltHash = genPass(password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    try {
        const newUser = new userModel({ fullname, email, salt, hash});

        let responseData = await newUser.save();

        if (responseData){
            response.status(200).send({message: "Signup successful"});
        }
        else {
            response.status(400).send({message: "Signup unsucessful"});
        }

    } catch (error) {
        console.log(error);
    }
});

//Login
appRouter.post('/login', async function (request, response) {
    const { email, password } = request.body;

    try {
       let responseData = await userModel.findOne({email});

        if (responseData) {
            const isValid = validPass(password,responseData.salt,responseData.hash);

            if (isValid) {
                response.status(200).send({
                    status: 1,
                    message: "Login Successful"
                });
            } else {
                response.status(300).send({
                    status: 0,
                    message: "Wrong username or password"
                });
            }
        } else {
            response.status(300).send({message: "User does not exist"});
        }
    } 
    catch (error) {
        console.log(error);
    }
});

//Get Users
appRouter.get('/users', async function(request, response){
    let responseData = await userModel.find();
    
    response.status(200).send({ status: 200, data: responseData });
})

module.exports = appRouter;
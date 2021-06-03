const mongoose = require('mongoose');

const userSchema = mongoose.Schema;

const userSchemaModel = new userSchema(
    {
        fullname: String,
        email: String,
        password: String,
        hash: String,
        salt: String
    }
);
const userModel = mongoose.model('users', userSchemaModel);

module.exports = userModel;
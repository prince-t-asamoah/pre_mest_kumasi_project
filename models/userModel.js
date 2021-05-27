const mongoose = require('mongoose');

const appSchema = mongoose.Schema;

const appSchemaModel = new appSchema(
    {
        fullname: String,
        email: String,
        password: String,
        hash: String,
        salt: String
    }
);
const appModel = mongoose.model('users', appSchemaModel);

module.exports = appModel;
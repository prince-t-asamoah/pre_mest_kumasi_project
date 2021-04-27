const mongoose = require('mongoose');

const appSchema = mongoose.Schema;

const appSchemaModel = new appSchema(
    {
        fullName: String,
        email: String,
        password1: String,
        password2: String
    }
);
const appModel = mongoose.model('mmUsers', appSchemaModel);

module.exports = appModel;
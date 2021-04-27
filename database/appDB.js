const mongoose = require('mongoose');

const appDBConnect = async () => {
    try {
        const connection = await moongoose.connect(
            '', { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("Database connected successfully")
    } catch (error) {
        console.log(error);
    }
}

module.exports = appDBConnect;
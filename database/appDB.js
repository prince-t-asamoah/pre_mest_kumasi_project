const mongoose = require('mongoose');

const appDBConnect = async () => {
    try {
        const connection = await mongoose.connect(
            'mongodb+srv://super_admin:@dmin@mmsys-app.0z9eg.mongodb.net/mmsys-app?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = appDBConnect;
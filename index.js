const express = require('express');
const cors = require('cors');

const appRoute = require('./router');
const appDBConnect = require('./DB');

const appServer = express();
const appPort = 5000;

appServer.use(cors());
appServer.use(express.json());

appDBConnect();

appServer.use('/api/v1', appRoute);

appServer.listen(appPort, ()=> console.log(`Server running on port ${appPort}`));
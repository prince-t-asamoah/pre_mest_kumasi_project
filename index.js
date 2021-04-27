const express = require('express');
const cors = require('cors');
const appRouter = require('./routes/appRouter');
const appDBConnect = require('./database/appDB');

const appServer = express();
const appPort = 5000;

appServer.use(cors());
appServer.use(express.json());
appServer.use('/api/v1', appRouter);

appDBConnect();

appServer.listen(appPort, ()=> console.log(`Application Server started on port ${appPort}`));
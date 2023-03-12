import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from './src/routes/routes';

const myApp = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/learningDb');

// bodyparser setup
myApp.use(bodyParser.urlencoded({ extended: true }));
myApp.use(bodyParser.json());

routes(myApp);

myApp.get('/', (req, res, next) => {
    res.send(`Node and express server is running on port ${PORT}`);
});

myApp.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});
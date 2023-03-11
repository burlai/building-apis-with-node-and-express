import express from "express";
import routes from './src/routes/routes';

const myApp = express();
const PORT = 4000;

routes(myApp);

myApp.get('/', (req, res, next) => {
    res.send(`Node and express server is running on port ${PORT}`);
});

myApp.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});
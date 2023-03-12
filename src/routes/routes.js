import { addNewContact, getContacts } from "../controllers/controller";

const routes = (expressApp) => {

    expressApp.route('/contact')
        .get((req, res, next) => {

            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);

            next();
        }, getContacts) // passing controller functionality to interact with mongoDB
        
        .post(addNewContact); // passing controller functionality to interact with mongoDB

    expressApp.route('/contact/:contactId')
        .put((req, res) => {
            res.send('PUT request successfull');
        })

        .delete((req, res) => {
            res.send('DELETE request successfull');
        });
}

export default routes;

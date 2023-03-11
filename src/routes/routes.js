const routes = (expressApp) => {

    expressApp.route('/contact')
        .get((req, res, next) => {

            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);

            next();
        }, (req, res) => {
            res.send('GET request successfull');
        })
        
        .post((req, res) => {
            res.send('POST request successfull');
        });

    expressApp.route('/contact/:contactId')
        .put((req, res) => {
            res.send('PUT request successfull');
        })

        .delete((req, res) => {
            res.send('DELETE request successfull');
        });
}

export default routes;

'use-strict'

//Importing the dependencies and setting up http server
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json());//This creates a http server

//Now setting up the server port
app.listen(process.env.PORT || 1337, () => console.log("The port is currently listening"));

//Now we will add the webhook endpoint
app.post('/myApp', (req, res) => {
    let body = req.body;

    //Checking if there is a event in page subscription
    body.entry.forEach(function (entry) {
       //Getting the entry message array but will contain only one message
       let webhook_event = entry.messaging[0];
       console.log(webhook_event);
    });
    //The if returns 200 its ok
    res.status(200).send('Event Received');
    //Returns a 404
    else {
        res.sendStatus(404);
    }
});
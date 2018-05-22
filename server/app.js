import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import router from './routes/index.js';


// Call express to a variable
const app = express();

// Set configurations
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));

// Connect all routes to application
app.use('/api/v1', router);

const port = +process.env.PORT || 4000;
app.set('port', port)

// Turn on the server
app.listen(port, () =>{
    console.log(`The server is listening on port ${port}`)
});

export default app;
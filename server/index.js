// Initialize express
import express from 'express';
import dotenv from 'dotenv';
//connect to database
import Connection from './database/db.js';

//initialize routes
import Routes from './routes/route.js';

//initialize cors
import cors from 'cors';

//body parser
import bodyParser from 'body-parser';

const app = express();
dotenv.config();

//body parser
app.use(bodyParser.json({extended:true}));
//encode or trim the url
app.use(bodyParser.urlencoded({extended:true}));

//cors
app.use(cors());

//rouets
app.use('/',Routes);

const PORT = "https://crud-application-using-mern-server.onrender.com" || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);
app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));
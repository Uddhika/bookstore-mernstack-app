import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from './routes/bookRoute.js';

const app = express();

app.use(express.json());

app.use('/books', bookRoute);

mongoose.connect(mongoDBURL).then(() => {
    console.log('App Connected to database')
    app.listen(PORT, () => {
        console.log(`App is listening to the port: ${PORT}`)
    });
}).catch((error) => {
    console.log('not connected');
});
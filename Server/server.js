//Require nesse NPM Packege

const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors')
//import Router
const indexRouter = require("./app/routes/index");
const UserRouter = require("./app/routes/users");
//Require DB

const db = require("./config/db");

//Establish DB connection

mongoose.connect(db, { useNewParser: true });
mongoose.connection.once("open", () => {
  console.log("Connected to mongoose");
});

const app = express();

//Define the port for the api

const port = process.env.Port || 5000;
const reactPort =3000



//app.use(expres.json());

//SetCors
app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` }))

//** MiddleWear*/
//Add `body Prser `

app.use(express.json());

/** Mount omported Router
 *
 *
 *
 */
app.use(indexRouter);
app.use(UserRouterRouter);
//Start the ser

app.listen(port, () => {
  console.log(`Blogy listen${port}`);
});

/**
 
 */
<<<<<<< HEAD
// Creating a base name for the MongoDB
const mongooseBaseName = "PersonalandProfessional";

const database = {
  development: `mongodb://localhost/${mongooseBaseName}-development`,
  test: `mongodb://localhost/${mongooseBaseName}-test`
};

const localDB = process.env.TESTENV ? database.test : database.development;

const currentDB = process.env.MONGODB_URI || localDB;

//Export the database
module.exports = currentDB;

//File that caring of which DB connected .
=======
'use strict'

// creating a base name for the mongodb
const mongooseBaseName = 'personal-and-professional-page'

// create the mongodb uri for development and test
const database = {
  development: `mongodb://localhost/${mongooseBaseName}-development`,
  test: `mongodb://localhost/${mongooseBaseName}-test`
}

// Identify if development environment is test or development
// select DB based on whether a test file was executed before `server.js`
const localDb = process.env.TESTENV ? database.test : database.development

// Environment variable MONGODB_URI will be available in
// heroku production evironment otherwise use test or development db
const currentDb = process.env.MONGODB_URI || localDb

module.exports = currentDb
>>>>>>> master

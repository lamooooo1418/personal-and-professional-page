'use strict'

// creating a base name for the mongodb
const mongooseBaseName = 'personal-and-professional-db'

// create the mongodb uri for development and test
const database = {
    development: `mongodb://localhost/${mongooseBaseName}-development`,
    test: `mongodb://localhost/${mongooseBaseName}-test`
}

// Identify if development environment is test or development
// select DB based on whether a test file was executed before `server.js`
const localDB = process.env.TESTENV ? database.test : database.development

// Environment variable MONGODB_URI will be available in
// heroku production evironment otherwise use test or development db
const currentDB = process.env.MONGODB_URI || localDB

module.exports = currentDB

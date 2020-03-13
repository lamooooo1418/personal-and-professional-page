// Creating a base name for the MongoDB
const mongooseBaseName = "PersonalandProfessional";
// Create the MongoDB URI for Development and Test
const database = {
  development: `mongodb://localhost/${mongooseBaseName}-development`,
  test: `mongodb://localhost/${mongooseBaseName}-test`
};
//Identify if development enviroment is test or Development
//Select DB based on weather a test file

const localDB = process.env.TESTENV ? database.test : database.development;

//Enviroment Varible Mongo_URI will be avilable in
// Heroko production enviroment

const currentDB = process.env.MONGODB_URI || localDB;

//Export the database
module.exports = currentDB;

//File that caring of which DB connected .

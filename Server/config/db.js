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

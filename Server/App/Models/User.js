const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Define User Schema
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    //Resume object Schema
    resume: [
      {
        type: Schema.Types.ObjectId,
        ref: "Resume"
      }
    ]
  },
  { timestamps: true }
);

//Compile our Model

const User = mongoose.model("User", UserSchema);

//Export our Model

module.exports = User;

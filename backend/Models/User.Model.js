const mongoose = require("mongoose");

const CoustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role:{type:String}
});

const CoustomerModel = mongoose.model("PharmaUserModel", CoustomerSchema);

module.exports = { CoustomerModel };

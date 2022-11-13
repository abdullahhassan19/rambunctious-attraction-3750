const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String },
  token: { type: String },
  cart: { type: Array, default: [] },
  userId: { type: String },
});

const UserModel = model("user", UserSchema);

module.exports = { UserModel };

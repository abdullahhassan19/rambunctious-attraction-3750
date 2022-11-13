const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/User.Model");
const bcrypt = require("bcrypt");
const UserRouter = Router();
UserRouter.post("/signup", (req, res) => {
  const { name, email, password, role } = req.body;

  bcrypt.hash(password, 5, async function (err, hashedpassword) {
    if (err) {
      res.send({ msg: "Something went Wronge" });
    }
    const newcoustomer = new UserModel({
      name,
      email,
      password: hashedpassword,
      role,
    });
    console.log(newcoustomer);
    try {
      await newcoustomer.save();
      res.send({ msg: "Sign up Sucessfully" });
    } catch {
      res.send({ msg: "Error in Signup" });
    }
  });
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const coustomer = await UserModel.findOne({ email });
  if (!coustomer) {
    return res.send({ msg: "Invalid Credentials" });
  }
  const hashedpassword = coustomer.password;
  await bcrypt.compare(password, hashedpassword, function (err, result) {
    if (err) {
      res.send({ msg: "Something Went Wrong" });
    }
    if (result == true) {
      const token = jwt.sign(
        { email: coustomer.email, _id: coustomer._id },
        process.env.SECRETKEY
      );
      return res.send({
        messege: "Login Sucessful",
        token: token,
        userId: coustomer._id,
        name: coustomer.name,
        cart: coustomer.cart,
      });
    } else {
      return res.send("Invalid Credentials");
    }
  });
});

UserRouter.get("/:userId/getprofile", async (req, res) => {
  // const { email, password } = req.body;
  const coustomer = await UserModel.findOne({ userId });
  res.send({ msg: "profile", coustomer });
});

module.exports = { UserRouter };

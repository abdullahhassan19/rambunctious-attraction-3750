const { Router } = require("express");
const ProductRouter = Router();
const { Authentication } = require("../Midlewares/Authentication");
const { ProductModel } = require("../Models/Data.Model");
const { UserModel } = require("../Models/User.Model");



ProductRouter.post("/:userId/create", Authentication, async (req, res) => {
  const userId = req.params.userId;
  const {
    productName,
    price,
    strikedPrice,
    imageUrl,
    prodHighlights,
    longDesc,
    shortDesc,
    ratings,
    numberOfRatings,
    discount,
    brand,
  } = req.body;
  const createproduct = new ProductModel({
    productName,
    price,
    strikedPrice,
    imageUrl,
    prodHighlights,
    longDesc,
    shortDesc,
    ratings,
    numberOfRatings,
    discount,
    brand,
    userId,
  });
  await createproduct.save();
  res.send({ msg: "Product Created", Product: createproduct });
});

ProductRouter.get("/:_id/one", Authentication, async (req, res) => {
  const _id = req.params._id;
  const userproducts = await ProductModel.find({ _id });
  res.send({ msg: "Product", product: userproducts });
});

ProductRouter.get("/", async (req, res) => {
  const Allproducts = await ProductModel.find();
  res.send({ msg: "All Produucts", products: Allproducts });
});

ProductRouter.get("/:userId", Authentication, async (req, res) => {
  const userId = req.params.userId;
  const userproducts = await ProductModel.find({ userId });
  res.send({ msg: "All Produucts", products: userproducts });
});

ProductRouter.put(
  "/:userId/update/:productId",
  Authentication,
  async (req, res) => {
    //   const userId = req.params.userId;
    const productId = req.params.productId;
    const {
      productName,
      price,
      strikedPrice,
      imageUrl,
      prodHighlights,
      longDesc,
      shortDesc,
      ratings,
      numberOfRatings,
      discount,
      brand,
    } = req.body;
    const userproducts = await ProductModel.findByIdAndUpdate(productId, {
      productName: productName,
      price: price,
      strikedPrice: strikedPrice,
      imageUrl: imageUrl,
      prodHighlights: prodHighlights,
      longDesc: longDesc,
      shortDesc: shortDesc,
      ratings: ratings,
      numberOfRatings: numberOfRatings,
      discount: discount,
      brand: brand,
    });
    res.send({ msg: "Product Updated" });
  }
);

ProductRouter.delete(
  "/:userId/delete/:productId",
  Authentication,
  async (req, res) => {
    const productId = req.params.productId;
    const userproducts = await ProductModel.findByIdAndRemove(productId);
    res.send({ msg: "Product deleted" });
  }
);

ProductRouter.post(
  "/:userId/addtocart/:productId",
  Authentication,
  async (req, res) => {
    console.log("HJBIHBIB");
    const { productId, userId } = req.params;
    const newproduct = await ProductModel.find({ _id: productId });
    //  res.send({ msg: "New Produuct", product: newproduct });
    const user = await UserModel.update(
      { userId },
      { $push: { cart: { newproduct } } }
    );
    res.send({ msg: "New User", product: newproduct });
    // user.cart.push(newproduct)

    try {
      await user.save();
      res.send({ msg: "Sign up Sucessfully" });
    } catch {
      res.send({ msg: "Error in Signup" });
    }
  }
);
module.exports = { ProductRouter };

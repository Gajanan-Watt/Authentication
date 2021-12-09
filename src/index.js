const express = require("express");

//const { register, login } = require("./controllers/auth.controller");
const register = require("./controllers/auth.controller");
const productController = require("./controllers/product.controller");

const app = express();

app.use(express.json());

// app.use("/users", userController) // /register /login
// app.post("/signup", register);
// app.post("/signin", login);
app.use("/signup", register);
// app.use("/signin", login);
app.use("/products", productController);

module.exports = app;

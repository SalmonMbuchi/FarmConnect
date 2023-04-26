const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

// parse incoming request bodies in JSON format
app.use(express.json());
// parse cookies
app.use(cookieParser());
// allow cross-origin requests
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// serve static files
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

// import routes
const user = require("./controller/user");
const shop = require("./controller/shop");
const product = require("./controller/product");

// endpoints
app.use("/api/v2/user", user);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);

app.use(ErrorHandler);
module.exports = app;

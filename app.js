const express = require("express");
const app = express();

const pictureRouter = require("./routes/picture");

require("dotenv").config();
require("./db");

const port = process.env.PORT || 8080;

app.use("/picture", pictureRouter);

app.listen(port, () => {
	console.log("Server running | http://localhost:8080/");
});

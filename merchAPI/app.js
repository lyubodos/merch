const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv/config");

const shirtsRouter = require("./routes/shirtsRouter");

//Creating a reference for the express method
const app = express();

//implementing the cors and body parser
app.use(express.json());
app.use(cors());

//importing the required variables for the mongodb conection
const port = 4000 || process.env.DB_PORT;
const uri = process.env.DB_URI;

//MongoDB connectivity with mongoose establishment
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Server is connected to the MongoDB merch collection");
});

//Implementing middleware functions
app.use("/tshirts", shirtsRouter);

//Basic server deployment
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

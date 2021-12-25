const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv/config");

const shirtsRouter = require("./routes/shirtsRouter");

const app = express();

app.use(express.json());
app.use(cors());

const port = 4000 || process.env.DB_PORT;
const uri = process.env.DB_URI;


mongoose.connect(uri, { useNewUrlParser: true});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Server is connected to the MongoDB merch collection");
});



app.use('/tshirts', shirtsRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

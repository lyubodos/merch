const express = require("express");
const cors = require("cors");

require("dotenv/config");

const app = express();

app.use(express.json());
app.use(cors());

const port = 4000 || process.env.DB_PORT;


app.use((req, res, next) => {
    res.write("Hello There!!!");
    res.end();
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

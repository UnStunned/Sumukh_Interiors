const path = require("path");
const express = require("express");
const app = express();

PORT = 8080;
PATH = path.join(__dirname,"../public");

app.use(express.static(PATH));
app.set('title', "Sumukh Interiors");

app.listen(PORT, ()=>{
    console.log("Listening on port 8080");
})

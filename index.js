const express = require("express");
const server = express();
server.use(express.json());

const BooksRoute = require("./routes/books");
server.use("/books", BooksRoute);

server.get("/", (req, res)=>
{
    res.status(200).json({api:"ok"});
});

module.exports = server;
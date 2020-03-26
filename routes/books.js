const route = require("express")();

let Books = 
    [
        { name: "Diary of a Wimpy Kid", author: "Jeff Kinney", year: 2007 }
    ];

route.get("/", (req, res)=>
{
    res.status(200).json(Books);
});

route.post("/", (req, res)=>
{
    Books.push(req.body);
    res.status(200).send("Ok");
});

route.delete("/", (req, res)=>
{
    Books.pop(req.body);
    res.status(200).send("Ok");
});

module.exports = route;
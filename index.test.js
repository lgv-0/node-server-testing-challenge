const request = require('supertest');
const server = require('./index.js');

describe("Server Head", ()=>
{
    it("Handles bad directories as 404", async ()=>
    {
        expect((await request(server).get("/")).status).toEqual(200);
        expect((await request(server).get("/nonexistant")).status).toEqual(404);
    });
});

describe("Books directory", ()=>
{
    let TempBook = 
    {
        name: "I, Funny: A Middle School Story",
        author: "James Patterson",
        year: 2013
    };

    it("POST / adds a book", async ()=>
    {
        expect((await request(server).post("/books").send(TempBook)).status).toEqual(200);
        expect((await request(server).get("/books")).body).toEqual(expect.arrayContaining([TempBook]));
    });

    it("DELETE / deletes a book", async()=>
    {
        expect((await request(server).del("/books").send(TempBook)).status).toEqual(200);
        expect((await request(server).get("/books")).body).not.toEqual(expect.arrayContaining([TempBook]));
    });

    it("GET / returns books", async ()=>
    {
        expect((await request(server).get("/books")).status).toEqual(200);
    });
});
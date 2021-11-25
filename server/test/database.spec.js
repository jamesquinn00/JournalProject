const request = require("supertest");
const database = require("../database");
const data = require("../data");

describe("Database.js tests", ()=>{
    // {readDatabase, writeDatabase, retrieveAllBlogs, writeBlog, retrieveBlog};
    describe("retrieveAllBlogs", () => {
        test("it exists", () => {
          expect(database.retrieveAllBlogs).toBeTruthy();
        });
      });
    
    describe("writeBlog", () => {
    test("it exists", () => {
        expect(database.writeBlog).toBeTruthy();
        });
    });

    describe("retrieveBlog", () => {
    test("it exists", () => {
        expect(database.retrieveBlog).toBeTruthy();
        });
    });

    describe("readDatabase", () => {
        test("it exists", () => {
            expect(database.readDatabase).toBeTruthy();
        });
    });

    describe("writeDatabase", () => {
        test("it exists", () => {
            expect(database.writeDatabase).toBeTruthy();
        });
        // test("check if jsonString is a string", () => {
        //     expect(typeof(database.jsonString)).toEqual("string")
        // })
    });
})
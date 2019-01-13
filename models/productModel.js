const fs = require('fs');//import file system core module
const path = require('path');//import path system core module to work with fs

//global function so it can be used inthe entire file - define path to data file
const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
); 

//get JSON from data file and parse the content
const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
        cb(JSON.parse(fileContent));
        }
    });
};

//export this model as a class
module.exports = class Product {
    constructor(t) {
        this.title = t;
}

//append new product to the data file
save() {
    getProductsFromFile(products => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
            console.log(err);
        });
    });
}

//Get all products via callback from data file in getProductsFromFile
static fetchAll(cb) {
    getProductsFromFile(cb);
    }
};
'use strict'

const fs = require("fs");
const {parse} = require("json2csv");
const express = require("express");


fs.readFile("userFile", (error, file) => {
        if (error) {
        return "Deu erro!";
        }
    
    const jsonFile = JSON.parse(file);
    const readJson = jsonFile.data.totais.errors;
    const fields = {flatten: '.'}
           
    try {
        const csv = parse(readJson,fields);
        fs.writeFileSync("./resp.csv", csv)
    } catch (err){
        console.log(err);
    }
    
});
"use strict"

const fs = require("fs");
const {parse} = require("json2csv");


fs.readFile("./leaves_teste.json", (error, file) => {
        if (error) {
        return "Deu erro!";
        }
    
    const jsonFile = JSON.parse(file);
    const fields = jsonFile.data.totais.errors;
        
    try {
        const csv = parse(fields);
        fs.writeFileSync("./resp.csv", csv)
    } catch (err){
        console.log(err);
    }

});









// fs.readFile("./leaves.json", (error, file) => {
//         if (error) {
//         return "Deu erro!";
//     }
//     const jsonFile = json(file);
//     //fs.writeFileSync("./resp.csv", this.data.totais.errors);
//     console.log(jsonFile.data.totais.errors);
// })


//const file = fs.readFileSync("./leaves.json");

// console.log(JSON.parse(file));


//fs.writeFileSync("./resp.csv", convert)

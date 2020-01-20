const express = require ('express');
const router = express.Router();
const {parse} = require("json2csv");


router.post('/create', (req, res) =>{
     const date = req.body;
     const jsonDate = date;
     const fields = { flatten: '.'};
     
    if (date ==! JSON) return res.send({ error: 'Dados inválidos.'});

    const csv = parse(jsonDate, fields);

    return res.send(csv);
    
});

module.exports = router;
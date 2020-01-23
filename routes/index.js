const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require('multer');

router.get('/', (req, res) => {
    return res.render('index');
});

router.post ('/', (req, res) => {
    return res.send({ message: 'Tudo ok com o método POST.'});
});

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb){
        cb(null,  Date.now() + file.originalname );
    }
});

const upload = multer({ storage});
router.post('/uploads', upload.single('fileJson'), (req, res) => {
    res.send('Arquivo enviado')
})


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

module.exports = router;



















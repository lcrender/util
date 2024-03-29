const express = require('express');
const path = require('path');
const multer = require('multer');
const { v4 : uuidv4 } =require('uuid');

// Inicializaciones
const app = express();

// Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
    }
});
app.use(multer({
    storage: storage,
    dest: path.join(__dirname, 'public/uploads'),
    limits: {fileSize: 2000000},
    fileFilter: (req, file, cb) => {
        const filetypes = /jpg|jpeg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname))
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: Archivo debe ser una imagen .jpeg, .jpg, png o gif")
    }
}).single('image'));

// Rutas
app.use(require('./routes/index.routes'));

// Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Start Server
app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
});
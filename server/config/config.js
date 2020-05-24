// =======================
// PUERTO
// =======================

process.env.PORT = process.env.PORT || 3000;

// =======================
// ENTORNO
// =======================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =======================
// BASE DE DATOS
// =======================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://samuel:l0M5HNTh60A1SfWO@cluster0-yrqa3.mongodb.net/cafe';
}
process.env.URLDB = urlDB;

// cadena de conexion local 
// 'mongodb://localhost:27017/cafe'

// cadena de conexión atlas
// 'mongodb+srv://samuel:l0M5HNTh60A1SfWO@cluster0-yrqa3.mongodb.net/cafe'
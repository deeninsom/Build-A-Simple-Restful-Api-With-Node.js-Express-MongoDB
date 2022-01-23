const mongoose = require('mongoose');

const db = mongoose.connect(
    process.env.DB_CONECT,() =>{
        console.log('connected')
    }
)

module.exports = db;
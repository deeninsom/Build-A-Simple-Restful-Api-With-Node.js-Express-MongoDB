const express = require('express');
const app = express();
const router = require('./router/router')
const dotenv = require('dotenv');
dotenv.config({ path: 'dot.env'})
const Db_connect = require('./databases.js')
const bodyPharser = require('body-parser')
app.use(bodyPharser.json())

///////////////////////////////////
const PORT = process.env.PORT



//middleware
app.use('/', router);


//listen port
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
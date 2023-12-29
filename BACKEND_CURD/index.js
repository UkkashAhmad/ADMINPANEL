const express = require('express')
const {URL} = require('./Config.js')


console.log(URL);

const app = express()

app.use(express.json())



app.listen( URL, () =>{

    console.log(`app is up with port${URL}`);
})
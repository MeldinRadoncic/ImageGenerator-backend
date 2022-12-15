const dotenv = require('dotenv').config()
const express = require('express')
const openAIrouter = require('./Routes/openAIroutes')
const app = express()

app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
}); 
app.use(express.urlencoded({ extended:false }))



app.use('/openai', openAIrouter)



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const openAIrouter = require('./Routes/openAIroutes')
const app = express()



app.use(express.urlencoded({ extended:false }))
app.use(cors())



app.use('/openai', openAIrouter)



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
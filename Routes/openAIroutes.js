const { application } = require('express');
const express = require('express');
const { generateImage } = require('./controller/openAIcontroller');

const openAIrouter = express.Router()

openAIrouter.get('/', (req,res) => {
    res.send('Its working')
})

openAIrouter.post('/generateimage', generateImage)

module.exports = openAIrouter;

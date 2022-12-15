const express = require('express');
const { generateImage } = require('./controller/openAIcontroller');

const openAIrouter = express.Router()

openAIrouter.post('/generateimage', generateImage)

module.exports = openAIrouter;

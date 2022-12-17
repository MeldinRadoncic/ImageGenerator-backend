require('dotenv').config()
const {Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,

})

const openai = new OpenAIApi(configuration)


const generateImage = async (req, res) => {
        const {description, size } = req.body;
        const imageSize = size === 'small' ? '256x256': size === 'medium' ? '512x512' : '1024x1024';
        try {
                const response = await openai.createImage({
                        prompt: description,
                        n:1,
                        size: imageSize
                })
                const imageUrl = response.data.data[0].url
                res.status(200).json({ success:true, data:imageUrl })
                console.log("This is server side status code " + res.status)

        } catch (error) {
                console.log('This is server side error ' + error)
                res.status(400)
                res.json({message:"Sorry, That image cannot be generated. Please try again."})
        }
}

module.exports = { generateImage }
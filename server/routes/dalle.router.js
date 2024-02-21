import express from "express"
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config() 

const router = express.Router()

const openai = new OpenAI({
    key: process.env.OPENAI_API_KEY,
    model: "dall-e-3",
})

console.log(process.env.OPENAI_API_KEY)
router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Hello from Dall.e routes' })

})

router.route('/').post(async (req, res) => {
    try {
        const  {prompt}  = req.body
        console.log(prompt)
        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            // response_format: 'b64_json'
        })
        
        const image = response.data[0].url
        res.status(200).json({ photo: image })
    } catch (error) {
        console.error("Error in /api/v1/daile:", error);
        res.status(500).json({ message: "Something went wrong" })
    }
})

export default router
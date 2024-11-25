import express from 'express'
import dotenv from 'dotenv'
import authroute from './routes/auth.route.js'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000
const mongo_url = process.env.MONGO_URL
app.use(cors({
    origin: process.env.frontend_url, // Allow requests from this origin
}));
app.use(express.json())

app.use('/api/auth', authroute)


mongoose.connect(mongo_url).then(() => {
    console.log("Connection done");
    app.listen(PORT, () => {
        console.log(`Server is on at ${PORT}`);
    })
}).catch((error) => {
    console.log(error);
})
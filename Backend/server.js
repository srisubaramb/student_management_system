import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/connectDB.js'
import router from './Routers/MainRoute.js'
import cors from 'cors'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
connectDB()
//Routes
app.use('/' , router)
app.listen(process.env.PORT, () => {
	console.log("Server started at " , process.env.PORT)
})
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/connectDB.js'
import router from './Routers/MainRoute.js'
dotenv.config()
const app = express()
app.use(express.json())
connectDB()
//Routes
app.use('/' , router)
app.listen(5000, () => {
	console.log("Server started at 5000")
})
import mongoose from "mongoose"

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI)
		console.log("Mongodb connected ")
	} catch(err) {
		console.error("Mongo db can't connected " + err.message)
	}
}
export default connectDB
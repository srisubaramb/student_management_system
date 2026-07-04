import mongoose from "mongoose";
const Course = new mongoose.Schema({
	courseName : {type : String , required : true},
	duration : {type : String , required : true} ,
	description : {type : String , required : true} 
})
export default mongoose.model('Course', Course)
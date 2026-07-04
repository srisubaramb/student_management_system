import mongoose from 'mongoose'
const Student = new mongoose.Schema({
	studentId : {type : String , required : true} ,
	name : {type : String , required : true},
	email : {type : String , required : true} ,
	phone : {type : String , required : true} ,
	gender : {type : String , required : true} ,
	dob : {type : Date , required : true} ,
	address : {type : String } ,
	course : {type : mongoose.Schema.Types.ObjectId , ref : 'Course'}
})
export default mongoose.model('Student', Student)
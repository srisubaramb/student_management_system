import Student from '../Models/Students.js'
export async function addStudent(req, res) {
	try {
		const {studentId, name , email , phone , gender , dob , address, course} = req.body
		const student = await Student.create({
			studentId : studentId,
			name,
			email,
			phone, 
			gender,
			dob,
			address,
			course
		})
		res.status(201).json({message : "Student created" , student})

	} catch (error) {
		res.status(500).json({message : "Error in server while creating student " + error.message})
	}
}
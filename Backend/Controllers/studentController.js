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
export async function allStudent(req, res) {
	try {
		const students = await Student.find().populate("course", "courseName")
		res.status(200)
		res.send(students)
	} catch(error) {
		res.status(500).json({message : "Error in server while viewing all students " + error.message})
	}
}
export const getStudentById = async (req, res) => {
	try {
		const student = await Student.findById(req.params.id)
		if(!student){
			return res.status(404).json({message : "student not found"})
		}
		res.status(200)
		res.send(student)
	} catch(error) {
		res.status(500).json({message : "Error in server while getting student " + error.message})
	}
}
export const updateStudent  = async (req, res) => {
	try {
		const {id} = req.params
		const {studentId, name , email , phone , gender , dob , address, course} = req.body
		const student = await Student.findByIdAndUpdate(id , {
			studentId : studentId,
			name,
			email,
			phone, 
			gender,
			dob,
			address,
			course
		})
		res.status(201).json({message : "Student updated" , student})
	} catch(error) {
		res.status(500).json({message: "Error in server while Updating student " + error.message})
	}
}

export const deleteStudent = async (req, res) => {
	try {
		const student = await Student.findByIdAndDelete(req.params.id)
		res.send(student)
	} catch(error) {
		res.status(500).json({message: "Error in deleting student " + error.message})
	}
}

//what is the course is deleted but still the student ref to that deleted course?
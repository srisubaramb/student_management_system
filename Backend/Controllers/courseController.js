import Course from '../Models/Courses.js'
export async function addCourse(req, res) {
	try {
		const {courseName , duration, description} = req.body
		const course = await Course.create({
			courseName,
			duration,
			description
		})
		res.status(201).json({message : "course created" , course})
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "Error in server while creating courses",
			error: error.message
    	});
}
} 
export async function allCourses(req, res) {
	try {
		const courses = await Course.find()
		res.status(200)
		res.send(courses)
	} catch(error) {
		res.status(500).json({message : "Error in server while viewing all course " + error.message})
	}
}
export const getCourseById = async (req, res) => {
	try {
		const course = await Course.findById(req.params.id)
		if(!course){
			return res.status(404).json({message : "course not found"})
		}
		res.status(200)
		res.send(course)
	} catch(error) {
		res.status(500).json({message : "Error in server while getting course " + error.message})
	}
}
export const updateCourse  = async (req, res) => {
	try {
		const {id} = req.params
		const {courseName, duration , description} = req.body
		const course = await Course.findByIdAndUpdate(id , {
			courseName,
			duration,
			description
		})
		res.status(201).json({message : "Course updated" , course})
	} catch(error) {
		res.status(500).json({message: "Error in server while Updating course " + error.message})
	}
}

export const deleteCourse = async (req, res) => {
	try {
		const course = await Course.findByIdAndDelete(req.params.id)
		res.send(course)
	} catch(error) {
		res.status(500).json({message: "Error in deleting course " + error.message})
	}
}

//what is the course is deleted but still the student ref to that deleted course?
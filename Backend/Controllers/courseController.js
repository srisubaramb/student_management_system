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
	} catch(error) {
		res.status(500).json({message : "Error in server while creating courses"})
	}
} 
import { useEffect, useState } from "react"
import api from "../utils/api.js"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function CourseForm(){
	const [course, setCourse] = useState({courseName : '' , duration : '' , description : '' })
	const {id} = useParams()
	useEffect(() => {
		if(id) fetchCourses(id)
	} , [])
	async function fetchCourses(id) {
		const res = await api.get(`/course/${id}`)
		setCourse(res.data)
	}
	async function handleFormSubmit(e) {
		e.preventDefault()
		if(course.courseName != '' &&  course.duration != '' && course.description != '' ) {
			try {
				const res = id ? await api.put(`course/${id}` , course) : await api.post("/course/", course);
				console.log(res.data);
			} catch (err) {
				console.log(err.response?.data);
			}
		}
	}
	return (
		<form onSubmit={(e) => handleFormSubmit(e)}>
			<input type="text" name="courseName" id="courseName" placeholder="Course Name" 
				onChange={(e) => setCourse({...course,  courseName: e.target.value})} value={course.courseName}/>
			<input type="text" name="duration" id="duration"  placeholder="Duration"
				 onChange={(e) => setCourse({...course, duration: e.target.value})} value={course.duration}/>
			<input type="text" name="description" id="description" placeholder="Description" 
				onChange={(e) => setCourse({...course, description : e.target.value})} value={course.description}/>
			<input type="submit" value={id ? 'Update Course' : 'Add Course'} />
		</form>
	)
}
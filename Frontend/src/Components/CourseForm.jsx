import { useEffect, useState } from "react"
import api from "../utils/api.js"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import TextInput from "./Form/TextInput.jsx"
import PrimaryButton from "./PrimaryButton.jsx"
import FormContainer from "./Form/FormContainer.jsx"

export default function CourseForm(){
	const initialCourseState = {courseName : '' , duration : '' , description : '' }
	const [course, setCourse] = useState(initialCourseState)
	const {id} = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		if(id) fetchCourses(id)
	} , [])
	async function fetchCourses(id) {
		const res = await api.get(`/course/${id}`)
		setCourse({...initialCourseState, ...res.data})
	}
	async function handleFormSubmit(e) {
		e.preventDefault()
		if(course.courseName != '' &&  course.duration != '' && course.description != '' ) {
			try {
				const res = id ? await api.put(`course/${id}` , course) : await api.post("/course/", course);
				console.log(res.data);
				setCourse(initialCourseState)
				navigate('/course/')
			} catch (err) {
				console.log(err.response?.data);
			}
		}
	}
	return (
		<FormContainer title={id ? "Update Course" : "Add Course"} onSubmit={handleFormSubmit}>

			<TextInput
				label="Course Name"
				name="courseName"
				value={course.courseName}
				placeholder="Course Name"
				onChange={e =>
					setCourse({...course, courseName:e.target.value})
				}
			/>

			<TextInput
				label="Duration"
				name="duration"
				value={course.duration}
				placeholder="Duration"
				onChange={e =>
					setCourse({...course, duration:e.target.value})
				}
			/>

			<TextInput
				label="Description"
				name="description"
				value={course.description}
				placeholder="Description"
				onChange={e =>
					setCourse({...course, description:e.target.value})
				}
			/>

			<PrimaryButton
				type="submit"
				value={id ? "Update Course" : "Add Course"}
			/>

		</FormContainer>
	)
}
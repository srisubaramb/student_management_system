import {  useEffect, useState } from "react"
import api from "../utils/api.js"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import TextInput from "./Form/TextInput.jsx"
import RadioGroup from "./Form/RadioGroup.jsx"
import SelectInput from "./Form/SelectInput.jsx"
import PrimaryButton from "./PrimaryButton.jsx"
import FormContainer from "./Form/FormContainer.jsx"

export default function StudentForm(){
	const initialStudentState = {studentId : '' , name : '' , email : '' , phone : '', gender : '' , dob : '' , address: '' , course : ''}
	const [student, setStudent] = useState(initialStudentState)
	const [courses, setCourses] = useState([])
	const {id} = useParams()
	const navigate = useNavigate()
	useEffect(() =>  {
	fetchCourse()
	if(id) {
		fetchStudent(id)
	}
	}, [])
	async function fetchCourse () {
		const res = await api.get('/course/')
		setCourses(res.data)
		setStudent({...student , course : res.data[0]._id})
	}
	async function fetchStudent(id) {
		try {
			const res = await api.get(`/student/${id}`)
			setStudent(res.data)
		} catch(error) {
			console.log(error.response?.data)
		}
	}
	async function handleFormSubmit(e) {
		e.preventDefault()
		if(student.name != '' &&  student.email != '') {
			try {
			const res = id ? await  await api.post(`/student/${id}` , student) : await api.post('/student/add', student) 
			console.log(res.data)
			setStudent(initialStudentState)
			navigate('/student/')
			}catch(error) {
				console.log(error.response?.data)
			}
		}
	}
	return (
		<FormContainer title={id ? "Update Student" : "Add Student"} onSubmit={handleFormSubmit}>

			<TextInput
				label="Student ID"
				name="studentId"
				value={student.studentId}
				placeholder="Student ID"
				onChange={e =>
					setStudent({...student, studentId:e.target.value})
				}
			/>

			<TextInput
				label="Name"
				name="name"
				value={student.name}
				placeholder="Name"
				onChange={e =>
					setStudent({...student, name:e.target.value})
				}
			/>

			<TextInput
				label="Email"
				type="email"
				name="email"
				value={student.email}
				placeholder="Email"
				onChange={e =>
					setStudent({...student, email:e.target.value})
				}
			/>

			<TextInput
				label="Phone"
				name="phone"
				value={student.phone}
				placeholder="Phone"
				onChange={e =>
					setStudent({...student, phone:e.target.value})
				}
			/>

			<RadioGroup
				label="Gender"
				name="gender"
				value={student.gender}
				onChange={e =>
					setStudent({...student, gender:e.target.value})
				}
				options={[
					{label:"Male",value:"male"},
					{label:"Female",value:"female"},
					{label:"Others",value:"others"}
				]}
			/>

			<TextInput
				label="Date of Birth"
				type="date"
				name="dob"
				value={
					student.dob
						? new Date(student.dob).toISOString().split("T")[0]
						: ""
				}
				onChange={e =>
					setStudent({...student, dob:e.target.value})
				}
			/>

			<TextInput
				label="Address"
				name="address"
				value={student.address}
				placeholder="Address"
				onChange={e =>
					setStudent({...student, address:e.target.value})
				}
			/>

			<SelectInput
				label="Course"
				name="course"
				value={student.course}
				options={courses}
				optionLabel="courseName"
				optionValue="_id"
				onChange={e =>
					setStudent({...student, course:e.target.value})
				}
			/>

			<PrimaryButton
				type="submit"
				value={id ? "Update Student" : "Add Student"}
			/>

		</FormContainer>
	)
}
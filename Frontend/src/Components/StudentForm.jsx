import {  useEffect, useState } from "react"
import api from "../utils/api.js"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function StudentForm(){
	const [student, setStudent] = useState({studentId : '' , name : '' , email : '' , phone : '', gender : '' , dob : '' , address: '' , course : ''})
	const [courses, setCourses] = useState([])
	const {id} = useParams()
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
			}catch(error) {
				console.log(error.response?.data)
			}
		}
	}
	return (
		<form onSubmit={(e) => handleFormSubmit(e)}>
			<input type="text" name="studentId" id="studentId" placeholder="Student ID" 
				onChange={(e) => setStudent({...student, studentId : e.target.value})} value={student.studentId}/>
			<input type="text" name="name" id="name" placeholder="Name" 
				onChange={(e) => setStudent({...student, name : e.target.value})} value={student.name}/>
			<input type="email" name="email" id="email"  placeholder="Email"
				 onChange={(e) => setStudent({...student, email: e.target.value})} value={student.email}/>
			<input type="phone" name="phone" id="phone" placeholder="Phone" 
				onChange={(e) => setStudent({...student, phone : e.target.value})} value={student.phone}/>
			<label htmlFor="genderMale">
				<input type="radio" name="gender" id="genderMale" value={'male'} checked={student.gender === 'male'} 
					onChange={(e) => setStudent({...student, gender : e.target.value})}/>
				Male
			</label>
			<label htmlFor="genderFemale">
				<input type="radio" name="gender" id="genderFemale" value={'female'} checked={student.gender === 'female'} 
					onChange={(e) => setStudent({...student, gender : e.target.value})}/>
				Female
			</label>
			<label htmlFor="genderOthers">
				<input type="radio" name="gender" id="genderOthers" value={'others'} checked={student.gender === 'others'} 
					onChange={(e) => setStudent({...student, gender : e.target.value})}/>
				Others
			</label>
			<input type="date" name="date" id="date" placeholder="DOB" 
				onChange={(e) => setStudent({...student, dob : e.target.value})} 
				value={ student.dob ? new Date(student.dob).toISOString().split("T")[0] : "" }/>
			<input type="text" name="address" id="address" placeholder="Address" 
				onChange={(e) => setStudent({...student , address : e.target.value})} value={student.address}/>
			<select name="course" id="course" onChange={(e) => {
				console.log(e.target.value)
				setStudent({...student, course : e.target.value})}}
				value={student.course}
				>
				{courses.length > 0 ?
				 courses.map(course => <option key={course._id} value={course._id}>{course.courseName}</option>) :
				 <option value={null}>No course</option>
				}
			</select>
			<input type="submit" value={id ? 'Update Student' : 'Add Student'} />
		</form>
	)
}
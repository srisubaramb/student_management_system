import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import api from "../utils/api";
import PrimaryButton from "./PrimaryButton";

export default function StudentDisplay() {
	const [students , setStudents] = useState([])
	const [refresh, setRefresh] = useState(false)
	const navigate = useNavigate()
	useEffect(() => {
		async function fetchStudents() {
			try{
			const res =  await api.get('/student/')
			setStudents(res.data)
			} catch(error) {
				console.log(error.response?.data) 
			}
		}
		fetchStudents()
	} , [refresh])
	 function onEditPressed(id) {
		navigate(`/student/edit/${id}`)
	}
	async function onDeletePressed(id) {
		try{
			await api.delete(`/student/${id}`)
			setRefresh(true)

		} catch(error){
			console.log(error.response?.data)
		}
	}
	return (
		<>
			{
				students.length > 0 ? ( students.map(student => (
					<div key={student._id} className="border-2 m-2 p-2">
						<h2>ID: {student.studentId},  Name: {student.name}</h2>
						<p>email : {student.email}, phone : {student.phone} </p>
						<p>Address : {student.address} , dob : {new Date(student.dob).toLocaleDateString()}</p>
						<p>Course : {student.course.courseName}</p>
						<div className="flex gap-x-1">
							<PrimaryButton value={"Edit"} className={'bg-amber-400'} onClick = { () =>  onEditPressed(student._id)}/>
							<PrimaryButton value={"Delete"} className={"bg-red-400"} onClick={() => onDeletePressed(student._id)}/>
						</div>
					</div>

				))) : (<h3>No Students Found</h3>)
			}
		</>
	)
}
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import api from "../utils/api";
import { searchInArray } from "../utils/utils";
import Search from "./Search";
import StudentCard from "./StudentCard";

export default function StudentDisplay() {
	const [students , setStudents] = useState([])
	const [filteredStudents, setFilteredStudents] = useState([])
	const [refresh, setRefresh] = useState(false)
	const navigate = useNavigate()
	useEffect(() => {
		async function fetchStudents() {
			try{
			const res =  await api.get('/student/')
			setStudents(res.data)
			setFilteredStudents(res.data)
			} catch(error) {
				console.log(error.response?.data) 
			}
		}
		fetchStudents()
	} , [refresh])
	function filterStudent(search) {
		const filteredStudent = searchInArray(search , students)
		setFilteredStudents(filteredStudent)
	}
	function onEditPressed(id) {
		navigate(`/student/edit/${id}`)
	}
	async function onDeletePressed(id) {
		try{
			await api.delete(`/student/${id}`)
			setRefresh(!refresh)

		} catch(error){
			console.log(error.response?.data)
		}
	}
	return (
		<>
			<Search 
				options={[{value: 'studentId' , label : 'By Student ID'} , {value : "name" , label: "By Name" } , {value:"course.courseName" , label : "By Course"}]}
				filter={filterStudent}/>
			{
				filteredStudents.length > 0 ? (
					filteredStudents.map(student => <StudentCard student={student} onEditPressed={onEditPressed} onDeletePressed={onDeletePressed}/>)
				) : (
					<div className="text-center py-12">
						<h3 className="text-2xl font-semibold text-gray-500">
							No Students Found
						</h3>
					</div>
				)
			}
		</>
	)
}
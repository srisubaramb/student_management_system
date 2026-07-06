import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import api from "../utils/api";
import PrimaryButton from "./PrimaryButton";
import Search from "./Search";
import { searchInArray } from "../utils/utils";

export default function CourseDisplay() {
	const [courses , setCourses] = useState([])
	const [filteredCourse, setFilteredCourse] = useState([])
	const [refresh, setRefresh] = useState(false)
	const navigate = useNavigate()
	useEffect(() => {
		async function fetchCourses() {
			const res =  await api.get('/course/')
			setCourses(res.data)
			setFilteredCourse(res.data)
		}
		fetchCourses()
	} , [refresh])
	const filterCourse = (search) => {
		const filteredCourse = searchInArray(search, courses)
		setFilteredCourse(filteredCourse)
	}
	function onEditPressed(id) {
		navigate(`/course/edit/${id}`)
	}
	async function onDeletePressed(id) {
		try{

			await api.delete(`/course/${id}`)
			setRefresh(!refresh)

		} catch(error){
			console.log(error.response?.data)
		}
	}
	return (
		<>
			<Search  
				options={[{value : 'courseName' ,label :  'By Name' }, {value :  'duration' , label: 'By Duration'}]}
				filter={filterCourse}/>
			{
				filteredCourse.length > 0 ? ( filteredCourse.map(course => (
					<div key={course._id} className="border-2 m-2 p-2">
						<h2>Course Name : {course.courseName}</h2>
						<p>Duration : {course.duration} </p>
						<p>Description : {course.description}</p>
						<div className="flex gap-x-1">
							<PrimaryButton value={"Edit"} className={'bg-amber-400'} onClick = {() => onEditPressed(course._id)}/>
							<PrimaryButton value={"Delete"} className={"bg-red-400"} onClick = {() => onDeletePressed(course._id)}/>
						</div>
					</div>

				))) : (<h3>No Course Found</h3>)
			}
		</>
	)
}
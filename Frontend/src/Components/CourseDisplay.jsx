import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import api from "../utils/api";
import PrimaryButton from "./PrimaryButton";
import Search from "./Search";
import { searchInArray } from "../utils/utils";
import CourseCard from "./CourseCard";

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
					<CourseCard course={course} onEditPressed={onEditPressed} onDeletePressed={onDeletePressed} /> )
				)) : (<h3>No Course Found</h3>)
			}
		</>
	)
}
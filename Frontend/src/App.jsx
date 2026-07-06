import {Provider} from "react-redux"
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import store from "./store/store";
import StudentForm from "./Components/StudentForm";
import CourseForm from "./Components/CourseForm";
import CourseDisplay from "./Components/CourseDisplay";
import StudentDisplay from "./Components/StudentsDisplay";
export default function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
						<Nav />
					<Routes>
						<Route path={'/student'} element={<StudentDisplay />}/>
						<Route path={'/student/add'} element={<StudentForm />} />	
						<Route path={'/student/edit/:id'} element={<StudentForm />} />
						<Route path={'/course/add'} element={<CourseForm />} />	
						<Route path="/course/edit/:id" element={<CourseForm />}/>
						<Route path="/course" element={<CourseDisplay />}></Route>
						<Route path='/signup' element={<Signup />}></Route>
						<Route path="/login" element={<Login />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	)
}
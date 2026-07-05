import Login from "./Components/Login";
import Signup from "./Components/Signup";
import {Provider} from "react-redux"
import store from "./store/store";
import StudentForm from "./Components/StudentForm";
import CourseForm from "./Components/CourseForm";
import CourseDisplay from "./Components/CourseDisplay";
import StudentDisplay from "./Components/StudentsDisplay";
import { BrowserRouter , Routes, Route } from "react-router-dom";
export default function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path={'/student'} element={<StudentDisplay />}/>
						<Route path={'/student/add'} element={<StudentForm />} />	
						<Route path={'/student/edit/:id'} element={<StudentForm />} />
						<Route path="/course/:id" element={<CourseForm />}/>
						<Route path="/course" element={<CourseDisplay />}></Route>
						<Route path="/login" element={<Login />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	)
}
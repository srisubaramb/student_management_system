import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import store from "./store/store";
import StudentForm from "./Components/StudentForm";
import CourseForm from "./Components/CourseForm";
import CourseDisplay from "./Components/CourseDisplay";
import StudentDisplay from "./Components/StudentsDisplay";
import Dashboard from "./Components/Dashboard";
import { getFromLocal } from "./utils/storage";
import { useSelector } from "react-redux";
import PublicRoute from "./Components/PublicRoute";
import ProtectedRoute from "./Components/ProductedRoute";
export default function App() {
	const token = useSelector(state => state.auth.token);
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={ token
												? <Navigate to="/dashboard" replace />
												: <Navigate to="/login" replace />
											}
					/>

					{/* Public */}

					<Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
					<Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />

					{/* Protected */}

					<Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

					<Route path="/student" element={<ProtectedRoute><StudentDisplay /></ProtectedRoute>} />
					<Route path="/student/add" element={<ProtectedRoute><StudentForm /></ProtectedRoute>} />
					<Route path="/student/edit/:id" element={<ProtectedRoute><StudentForm /></ProtectedRoute>} />

					<Route path="/course" element={<ProtectedRoute><CourseDisplay /></ProtectedRoute>} />
					<Route path="/course/add" element={<ProtectedRoute><CourseForm /></ProtectedRoute>} />
					<Route path="/course/edit/:id" element={<ProtectedRoute><CourseForm /></ProtectedRoute>} />


				</Routes>

			</BrowserRouter>
		
		</>
	)
}
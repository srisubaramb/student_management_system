import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

export default function Dashboard() {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

	const activeStudents = students.filter(student => student.course !== null).length;

	const inactiveStudents = students.filter(student => student.course === null).length;
    useEffect(() => {
        fetchStudents();
        fetchCourses();
    }, []);

    async function fetchStudents() {
        try {
            const res = await api.get("/student");
            setStudents(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    async function fetchCourses() {
        try {
            const res = await api.get("/course");
            setCourses(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="max-w-7xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-8">
                Dashboard
            </h1>

            {/* Stats */}

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

				<div className="bg-blue-500 text-white rounded-lg p-6 shadow">
					<h2 className="text-lg">Total Students</h2>
					<p className="text-4xl font-bold mt-2">
						{students.length}
					</p>
				</div>

				<div className="bg-green-500 text-white rounded-lg p-6 shadow">
					<h2 className="text-lg">Total Courses</h2>
					<p className="text-4xl font-bold mt-2">
						{courses.length}
					</p>
				</div>

				<div className="bg-emerald-500 text-white rounded-lg p-6 shadow">
					<h2 className="text-lg">Active Students</h2>
					<p className="text-4xl font-bold mt-2">
						{activeStudents}
					</p>
				</div>

				<div className="bg-red-500 text-white rounded-lg p-6 shadow">
					<h2 className="text-lg">Inactive Students (Not Enrolled in courses)</h2>
					<p className="text-4xl font-bold mt-2">
						{inactiveStudents}
					</p>
				</div>

			</div>
            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mb-10">

                <Link
                    to="/student/add"
                    className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700"
                >
                    Add Student
                </Link>

                <Link
                    to="/course/add"
                    className="bg-green-600 text-white px-5 py-3 rounded hover:bg-green-700"
                >
                    Add Course
                </Link>

            </div>

            {/* Lists */}

            <div className="grid lg:grid-cols-2 gap-8">

                {/* Students */}

                <div className="bg-white shadow rounded-lg p-5">

                    <div className="flex justify-between items-center mb-4">

                        <h2 className="text-xl font-semibold">
                            Recent Students
                        </h2>

                        <Link
                            to="/student"
                            className="text-blue-600 hover:underline"
                        >
                            View All
                        </Link>

                    </div>

                    {
                        students.slice(0, 5).map(student => (

                            <div
                                key={student._id}
                                className="border-b py-3"
                            >
                                <h3 className="font-medium">
                                    {student.name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {student.email}
                                </p>

                            </div>

                        ))
                    }

                </div>

                {/* Courses */}

                <div className="bg-white shadow rounded-lg p-5">

                    <div className="flex justify-between items-center mb-4">

                        <h2 className="text-xl font-semibold">
                            Recent Courses
                        </h2>

                        <Link
                            to="/course"
                            className="text-blue-600 hover:underline"
                        >
                            View All
                        </Link>

                    </div>

                    {
                        courses.slice(0, 5).map(course => (

                            <div
                                key={course._id}
                                className="border-b py-3"
                            >
                                <h3 className="font-medium">
                                    {course.courseName}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {course.duration}
                                </p>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    );
}
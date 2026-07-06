import PrimaryButton from "./PrimaryButton";

export default function StudentCard({student , onEditPressed, onDeletePressed}) {
	return (
		<div
			key={student._id}
			className="bg-white rounded-xl shadow-md border border-gray-200 p-5 mb-5 hover:shadow-lg transition"
		>

			<div className="flex justify-between items-center mb-4">
				<div>
					<h2 className="text-xl font-bold text-gray-800">
						{student.name}
					</h2>
					<p className="text-gray-500">
						Student ID: {student.studentId}
					</p>
				</div>

				<span
					className={`px-3 py-1 rounded-full text-sm font-medium ${
						student.course
							? "bg-green-100 text-green-700"
							: "bg-red-100 text-red-700"
					}`}
				>
					{student.course ? "Active" : "Inactive"}
				</span>
			</div>

			<div className="grid md:grid-cols-2 gap-3 text-gray-700">

				<p>
					<span className="font-semibold">📧 Email:</span>{" "}
					{student.email}
				</p>

				<p>
					<span className="font-semibold">📞 Phone:</span>{" "}
					{student.phone}
				</p>

				<p>
					<span className="font-semibold">🎂 DOB:</span>{" "}
					{new Date(student.dob).toLocaleDateString()}
				</p>

				<p>
					<span className="font-semibold">📚 Course:</span>{" "}
					{student.course?.courseName || "No Course"}
				</p>

				<p className="md:col-span-2">
					<span className="font-semibold">🏠 Address:</span>{" "}
					{student.address || "N/A"}
				</p>

			</div>

			<div className="flex gap-3 mt-5">
				<PrimaryButton
					value="Edit"
					className="bg-amber-500 hover:bg-amber-600 text-white"
					onClick={() => onEditPressed(student._id)}
				/>

				<PrimaryButton
					value="Delete"
					className="bg-red-500 hover:bg-red-600 text-white"
					onClick={() => onDeletePressed(student._id)}
				/>
			</div>

		</div>
	)
}
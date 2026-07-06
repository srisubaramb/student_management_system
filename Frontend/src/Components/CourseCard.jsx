import PrimaryButton from "./PrimaryButton";

export default function CourseCard({course, onEditPressed, onDeletePressed}) {
 return (

		<div
			key={course._id}
			className="bg-white rounded-xl shadow-md border border-gray-200 p-5 mb-5 hover:shadow-lg transition"
		>

			<div className="flex justify-between items-center mb-4">
				<div>
					<h2 className="text-xl font-bold text-gray-800">
						{course.courseName}
					</h2>

					<p className="text-gray-500">
						Course Details
					</p>
				</div>

				<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
					{course.duration}
				</span>
			</div>

			<div className="space-y-3 text-gray-700">

				<p>
					<span className="font-semibold">📚 Course:</span>{" "}
					{course.courseName}
				</p>

				<p>
					<span className="font-semibold">⏳ Duration:</span>{" "}
					{course.duration}
				</p>

				<p>
					<span className="font-semibold">📝 Description:</span>{" "}
					{course.description || "No description available"}
				</p>

			</div>

			<div className="flex gap-3 mt-5">
				<PrimaryButton
					value="Edit"
					className="bg-amber-500 hover:bg-amber-600 text-white"
					onClick={() => onEditPressed(course._id)}
				/>

				<PrimaryButton
					value="Delete"
					className="bg-red-500 hover:bg-red-600 text-white"
					onClick={() => onDeletePressed(course._id)}
				/>
			</div>
		</div>
        
 )
}
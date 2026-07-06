import { useState } from "react"

export default function Search({options ,...props}) {
	const [search , setSearch] = useState({searchText : '' , searchBy : options[0].value})
	async function handleFormSubmit(e){
		e.preventDefault()
		props.filter(search)
	}
	return(
		<div className="bg-white shadow-md rounded-xl p-5 mb-6">
			<form
				onSubmit={handleFormSubmit}
				className="flex flex-col md:flex-row gap-4 items-center"
			>
				<select
					className="w-full md:w-52 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					onChange={(e) =>
						setSearch({ ...search, searchBy: e.target.value })
					}
				>
					{options.map((option, index) => (
						<option key={index} value={option.value}>
							{option.label}
						</option>
					))}
				</select>

				<input
					type="text"
					id="search"
					placeholder="Search..."
					className="flex-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					onChange={(e) =>
						setSearch({ ...search, searchText: e.target.value })
					}
				/>

				<button
					type="submit"
					className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
				>
					Search
				</button>
			</form>
		</div>
	)
}
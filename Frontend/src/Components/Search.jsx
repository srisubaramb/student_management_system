import { useState } from "react"

export default function Search({options ,...props}) {
	const [search , setSearch] = useState({searchText : '' , searchBy : options[0].value})
	async function handleFormSubmit(e){
		e.preventDefault()
		props.filter(search)
	}
	return(
		<div>
			<form onSubmit={(e) => handleFormSubmit(e)}>
				<select 
					onChange={(e) => setSearch({...search , searchBy : e.target.value})}>
					{
						options.map((option,index) => <option key={index} value={option.value} >{option.label}</option>)
					}
				</select>
				<input type="text" name="search" id="search" placeholder="Search For" 
					onChange={(e) => setSearch({...search , searchText : e.target.value})}/>
				<input type="submit" value="Search" />
			</form>
		</div>
	)
}
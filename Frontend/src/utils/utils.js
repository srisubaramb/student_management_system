export function searchInArray(search , dataArray) {
	return dataArray.filter(data => 
		data[search.searchBy]
		.toString().toLowerCase()
		.includes(search.searchText.toLowerCase()))
}
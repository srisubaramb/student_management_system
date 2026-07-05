export const storeToLocal =  (key, value) => {
	try {
		localStorage.setItem(key, JSON.stringify(value))
		return {message : key + " data stored"}
	} catch (error) {
		console.log("Error while storing data locally " + error.message)
	}
}
export const getFromLocal = (key) => {
	try {
		const data = JSON.parse(localStorage.getItem(key))
		return {message : key + " Data found" , data}
	} catch(error) {
		console.log("Error while getting data from local " + error.message)
	}
}
export const deleteFromLocal = (key) => {
	try {
		localStorage.removeItem(key)
		return {message : key + " data deleted"}
	} catch(error) {
		console.log("Error while deleting data from local " + error.message)
	}
}
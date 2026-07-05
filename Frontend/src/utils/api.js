import axios from 'axios'
import { getFromLocal } from './storage'
const api = axios.create({
	baseURL : `http://localhost:5000`,
	headers : {
		"Content-Type": "application/json"
	}
})
//Add token if token exist 
api.interceptors.request.use((config) => {
	const token = getFromLocal('token').data
	if(token) {
		config.headers = {
		...config.headers , "Authorization" : `Bearer ${token}`
		} 
	}
	return config
})

export default api
import { useState } from "react"
import api from "../utils/api.js"
import { getFromLocal, storeToLocal } from "../utils/storage.js"
import { useDispatch } from "react-redux"
import { setCredentials } from "../store/authSlice.js"

export default function Login(){
	const [user, setUser] = useState({ email : '' , password : ''})
	const authDispatch = useDispatch()
	async function handleFormSubmit(e) {
		e.preventDefault()
		if(user.email != '' && user.password != '') {
			const res = await api.post('/auth/login', {
				email : user.email,
				password : user.password
			})
			authDispatch(setCredentials(res.data))
		}
	}
	return (
		<form onSubmit={(e) => handleFormSubmit(e)}>
			<input type="email" name="email" id="email"  placeholder="Email"
				 onChange={(e) => setUser({...user, email: e.target.value})}/>
			<input type="password" name="password" id="password" placeholder="Password" 
				onChange={(e) => setUser({...user, password : e.target.value})}/>
			<input type="submit" value="Login" />
		</form>
	)
}
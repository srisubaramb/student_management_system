import { useState } from "react"
import api from "../utils/api.js"

export default function Signup(){
	const [user, setUser] = useState({name : '' , email : '' , password : '' , confirmPassword : ''})
	async function handleFormSubmit(e) {
		e.preventDefault()
		if(user.name != '' &&  user.email != '' && user.password != '' && user.password == user.confirmPassword) {
			const res = await api.post('/auth/signup', {
				name : user.name ,
				email : user.email,
				password : user.password
			})
			console.log(res.data)
		}
	}
	return (
		<form onSubmit={(e) => handleFormSubmit(e)}>
			<input type="text" name="name" id="name" placeholder="Name" 
				onChange={(e) => setUser({...user, name : e.target.value})}/>
			<input type="email" name="email" id="email"  placeholder="Email"
				 onChange={(e) => setUser({...user, email: e.target.value})}/>
			<input type="password" name="password" id="password" placeholder="Password" 
				onChange={(e) => setUser({...user, password : e.target.value})}/>
			<input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" 
				onChange={(e) => setUser({...user, confirmPassword : e.target.value})}/>
			<input type="submit" value="Sign Up" />
		</form>
	)
}
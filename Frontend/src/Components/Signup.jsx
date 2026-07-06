import { useState } from "react"
import api from "../utils/api.js"
import FormContainer from "./Form/FormContainer.jsx"
import TextInput from "./Form/TextInput.jsx"
import PrimaryButton from "./PrimaryButton.jsx"

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
		<FormContainer
			title="Sign Up"
			onSubmit={handleFormSubmit}
		>

			<TextInput
				label="Name"
				name="name"
				value={user.name}
				placeholder="Enter your name"
				onChange={e =>
					setUser({
						...user,
						name: e.target.value
					})
				}
			/>

			<TextInput
				label="Email"
				type="email"
				name="email"
				value={user.email}
				placeholder="Enter your email"
				onChange={e =>
					setUser({
						...user,
						email: e.target.value
					})
				}
			/>

			<TextInput
				label="Password"
				type="password"
				name="password"
				value={user.password}
				placeholder="Enter your password"
				onChange={e =>
					setUser({
						...user,
						password: e.target.value
					})
				}
			/>

			<TextInput
				label="Confirm Password"
				type="password"
				name="confirmPassword"
				value={user.confirmPassword}
				placeholder="Confirm your password"
				onChange={e =>
					setUser({
						...user,
						confirmPassword: e.target.value
					})
				}
			/>

			<PrimaryButton
				type="submit"
				value="Sign Up"
			/>

		</FormContainer>
	)
}
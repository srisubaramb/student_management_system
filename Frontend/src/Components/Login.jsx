import { useState } from "react"
import api from "../utils/api.js"
import { getFromLocal, storeToLocal } from "../utils/storage.js"
import { useDispatch } from "react-redux"
import { setCredentials } from "../store/authSlice.js"
import TextInput from "./Form/TextInput.jsx"
import PrimaryButton from "./PrimaryButton.jsx"
import FormContainer from "./Form/FormContainer.jsx"

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
		<FormContainer
			title="Login"
			onSubmit={handleFormSubmit}
		>

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

			<PrimaryButton
				type="submit"
				value="Login"
			/>

		</FormContainer>
	)
}
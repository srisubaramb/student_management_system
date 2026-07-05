import {createSlice} from '@reduxjs/toolkit'
import { deleteFromLocal, getFromLocal, storeToLocal } from '../utils/storage'
const initialState = {
	token : getFromLocal('token') || null,
	user : getFromLocal('user') || null
}
const authSlice =  createSlice({
	name: 'auth',
	initialState : initialState,
	reducers : {
		setCredentials : (state, action) => {
			const {token , user} = action.payload
			if (token != '' && user != '') {
				state.token = token
				state.user = user
				storeToLocal("token", token)
				storeToLocal("user" , user)
				console.log(getFromLocal('user'))
			}
		},
		logout : (state, action) => {
			state.token = null
			state.user = null
			deleteFromLocal('token')
			deleteFromLocal('user')
		}
	}
})
export const {setCredentials , logout} = authSlice.actions
export default authSlice.reducer
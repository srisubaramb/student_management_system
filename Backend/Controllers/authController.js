import Users from "../Models/Users.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const signup = async (req, res) => {
	try{
		const {name, email , password, role} = req.body
		const userFound = await Users.findOne({email})	
		if(!userFound){
			const hashedPassword = await bcrypt.hash(password, 10)
			await Users.create({
				name ,
				email , 
				password : hashedPassword,
				role : role || 'admin'
			})
			return res.status(201).json({message : 'user Registered'})
		}
		res.status(400).json({message : "User already exist"})
	} catch(error) {
		res.status(500).json({message : "Error in signup " + error.message})
	}
}
export const login = async (req, res) => {
	try {
		const {email, password} = req.body
		const user = await Users.findOne({email})
		if (user) {
			const isMatch = await bcrypt.compare(password , user.password)
			if (isMatch) {
				const token = jwt.sign({id: user._id, role : user.role} , process.env.JWT_SECRET, {expiresIn : process.env.JWT_EXPIRY})
				res.status(200).json({
					message: "Login successful token generated" , 
					token,
					user : {
						id: user._id,
						name: user.name,
						email: user.email,
						role: user.role
					}
				})
			}
			else {
				res.status(401).json({message : 'Password is wrong'})
			}
		} else {
			console.log('user not found')
			res.status(401).json({message : 'user not found'})
		}
		
	} catch (err) {
		res.status(500).json({message : 'error is login' + err.message})
	}
}

export const logout = async (req, res) => {
	try {
		res.status(200).json({message : "Logged out successfully"})
	} catch (err) {
		res.status(500).json({message : 'error is logout  ' + err.message})
	}
}
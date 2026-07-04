import jwt from "jsonwebtoken";

export const protect = async (req,res, next) => {
	try{
		let token;
		if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
			token = req.headers.authorization.split(" ")[1]
		} 
		if(!token) {
			return res.status(401).json({message : "Authorization header not found"})
		}
		const user = jwt.verify(token , process.env.JWT_SECRET)
		req.user = user
		//Allowing to the route
		next()
		return
	} catch(err) {
		res.status(500).json({message : "Error in server middleware protect" + err.message})
	}
}
export const adminOnly = async (req, res, next) => {
	try {
		if(req.user && req.user.role == 'admin') {
			next()
			return;
		} else {
			res.status(403).json({message : 'Access denied '})
		}
	} catch(error) {
		res.status(500).json({message : "Error in server middleware adminonly " + err.message})
	}
}
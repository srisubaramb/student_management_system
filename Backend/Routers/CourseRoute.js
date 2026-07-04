import  express from 'express'
import { addCourse } from '../Controllers/courseController.js'
import { adminOnly, protect } from '../Middlewares/authMiddleware.js'
const router = express.Router()
router.post('/add',protect, adminOnly,  addCourse)
export default router
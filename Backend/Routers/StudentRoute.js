import {Router} from 'express'
import { addStudent } from '../Controllers/studentController.js'
import { adminOnly, protect } from '../Middlewares/authMiddleware.js'
const router = Router()
router.post('/add' , protect, adminOnly, addStudent)
export default router
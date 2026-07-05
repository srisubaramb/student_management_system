import {Router} from 'express'
import { addStudent, allStudent, deleteStudent, getStudentById, updateStudent } from '../Controllers/studentController.js'
import { adminOnly, protect } from '../Middlewares/authMiddleware.js'
const router = Router()
router.get('/', protect, allStudent)
router.post('/add' , protect, adminOnly, addStudent)
router.get('/:id' ,protect, getStudentById )
router.post('/:id', protect, adminOnly, updateStudent)
router.delete('/:id' , protect, adminOnly, deleteStudent)
export default router
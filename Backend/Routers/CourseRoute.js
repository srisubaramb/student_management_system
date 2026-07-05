import  express from 'express'
import { addCourse, allCourses, deleteCourse, getCourseById, updateCourse } from '../Controllers/courseController.js'
import { adminOnly, protect } from '../Middlewares/authMiddleware.js'
const router = express.Router()
router.post('/',protect, adminOnly,  addCourse)
router.get('/' , protect, allCourses)
router.get('/:id', protect, adminOnly, getCourseById)
router.put('/:id' , protect, adminOnly , updateCourse)
router.delete('/:id', protect, adminOnly , deleteCourse)
export default router
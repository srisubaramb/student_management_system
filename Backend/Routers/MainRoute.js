import { Router } from "express";
import CourseRouter from './CourseRoute.js'
import StudentRouter from './StudentRoute.js'
import AuthRouter from './AuthRoute.js'
const router = Router()
//courses
router.use('/course' , CourseRouter)
//students
router.use('/student' , StudentRouter)
//auth
router.use('/auth' , AuthRouter)
export default router
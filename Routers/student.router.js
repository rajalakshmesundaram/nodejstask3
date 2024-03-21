import express from 'express'
import { createStudent, deleteStudent, getStudent, getStudentById, updateStudent } from '../Controllers/student.cont.js';
const router=express.Router()

router.post('/createstudent',createStudent)
router.get('/getStudent',getStudent)
router.get('/getStudentById/:id',getStudentById)
router.put('/updateStudent/:id',updateStudent)
router.delete('/deleteStudent',deleteStudent)



export default router;
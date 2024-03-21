import express from 'express';
import { allstudent, assignmentor, assignstudent, createMentor, getMentor, showMentor, updateMentor } from '../Controllers/mentor.cont.js';

const router=express.Router()

router.post('/createMentor',createMentor)
router.get('/getmentor',getMentor)
router.put('/updatementor/:id',updateMentor)
router.post("/assignstudent/:studentId", assignstudent);
router.post('/assignmentor/:mentorId',assignmentor)
router.post('/allstudent/:mentorId',allstudent)
router.post('/showstudent/:studentId',showMentor)

export default router
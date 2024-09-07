import  Express from "express";
import { StudentController } from "./student.controller";

const router = Express.Router()
// will call controller func
router.post('/create-student',StudentController.createStudent)

router.get('/', StudentController.getAllStudents)

router.get('/:studentId',StudentController.getSingleStudent)

export const StudentRoutes = router;
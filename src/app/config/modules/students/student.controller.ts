import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent = async(req : Request, res: Response) =>{
 
    try{
        const {student: studentData} = req.body


        const result = await studentServices.createStudentIntoDb(studentData)
       
   
       res.status(200).json({
           success : true,
           message : 'student is created successfully',
           data : result
       })
    }catch(err){
        console.log(err)
    }
  
}


const getAllStudents = async (req: Request, res: Response) =>{
    try{
     const result = await studentServices.getAllStudentsFromDb()

     res.status(200).json({
        success : true,
        message : 'All student get successfully',
        data : result
    })
    }catch(err){
        console.log(err)
    }
}
const getSingleStudent = async (req: Request, res: Response) =>{
    try{

        const {studentId} = req.params;
     const result = await studentServices.getSingleStudentFromDb(studentId)

     res.status(200).json({
        success : true,
        message : ' student get successfully',
        data : result
    })
    }catch(err){
        console.log(err)
    }
}

export const StudentController = {
    createStudent,
    getAllStudents,
    getSingleStudent
}
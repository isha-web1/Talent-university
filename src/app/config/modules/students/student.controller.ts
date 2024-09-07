import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent = async(req : Request, res: Response) =>{
 
    try{
        const student = req.body


        const result = await studentServices.createStudentIntoDb(student)
       
   
       res.status(200).json({
           success : true,
           message : 'student is created successfully',
           data : result
       })
    }catch(err){
        console.log(err)
    }
  
}

export const StudentController = {
    createStudent
}
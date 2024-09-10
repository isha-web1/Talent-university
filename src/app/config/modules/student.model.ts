import { Schema, model, } from 'mongoose';
import { Guardian, LocalGuardian,  Student, UserName } from './students/student.interface';

const userNameSchema = new Schema<UserName>(
    {
        firstName : {type : String, required : [true,'first name is required']},
        middleName : {type : String},
        lastName : {type : String,required : [true, 'last name is required']}
    }
)

const guardianSchema = new Schema<Guardian>({
    fatherName : {type : String, required :[true, 'father name is required']},
    fatherOccupation : {type : String, required :[true, 'fatherOccupation is required']},
    fatherContactNo : {type : String, required :[true,'fatherContactNo is required']},
    motherName : {type : String, required :[true,'motherName is required']},
    motherOccupation : {type : String, required :[true,'motherOccupation is required']},
    motherContactNo : {type : String, required :[true,'motherContactNo is required']},
 })

 const localGuardianSchema = new Schema<LocalGuardian>({
    name : {type : String, required :[true, 'name is required']},
    occupation : {type : String, required :[true, 'occupation is required']},
    contactNo : {type : String, required : [true,'contactNo is required']},
    address : {type : String, required :[true,'address is required']},
})

const studentSchema = new Schema<Student>({
    id : {type : String, required : true, unique : true},
    name : {
        type : userNameSchema,
        trim : true,
        required : [true,'name is required']
    },
    gender : {
        type : String,
        enum : {
            values : ['female','male', 'other'],
            message : '{VALUES} is not valid '
        },
        required : true
    },
    dateOfBirth : {type : String},
    email : {type : String,required :[true,'email must be required'],unique : true},
    contactNumber : {type : String, required :[true,'contactNumber is required']},
    emergencyContactNo : {type : String, required :[true,'emergencyContactNo is required']},
    bloodGroup :{
        type : String,
        enum :  {
            values : ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            message : '{values} is not valid'
        },
       
    },
    presentAddress : {type : String, required :[true,'presentAddress is required']},
    permanentAddress : {type : String, required :[true,'permanentAddress is required']},
    guardian : {
        type : guardianSchema,
        required : [true,'guardian is required']
    },
    localGuardian :{
        type : localGuardianSchema,
        required :[true, 'localGuardian is required']
    },
    profileImg : {type : String},
    isActive :{
        type : String,
        enum :  ['active', 'blocked'],
        default : 'active'
    }
});

 export const StudentModel = model<Student>('Student', studentSchema)

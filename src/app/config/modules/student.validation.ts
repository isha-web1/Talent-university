import { z } from 'zod';

// UserName schema
const userNameValidationSchema = z.object({
  firstName: z.string().min(1, 'first name is required'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'last name is required')
});

// Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, 'father name is required'),
  fatherOccupation: z.string().min(1, 'fatherOccupation is required'),
  fatherContactNo: z.string().min(1, 'fatherContactNo is required'),
  motherName: z.string().min(1, 'motherName is required'),
  motherOccupation: z.string().min(1, 'motherOccupation is required'),
  motherContactNo: z.string().min(1, 'motherContactNo is required')
});

// LocalGuardian schema
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, 'name is required'),
  occupation: z.string().min(1, 'occupation is required'),
  contactNo: z.string().min(1, 'contactNo is required'),
  address: z.string().min(1, 'address is required')
});

// Student schema
const studentValidationSchema = z.object({
  id: z.string().min(1, 'id is required'),
  name: userNameValidationSchema,
  gender: z.enum(['female', 'male', 'other'], {
    errorMap: () => ({ message: 'Gender must be one of female, male, or other' })
  }),
  dateOfBirth: z.string().optional(),
  email: z.string().email('Invalid email address'),
  contactNumber: z.string().min(1, 'contactNumber is required'),
  emergencyContactNo: z.string().min(1, 'emergencyContactNo is required'),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
    errorMap: () => ({ message: 'Invalid blood group' })
  }).optional(),
  presentAddress: z.string().min(1, 'presentAddress is required'),
  permanentAddress: z.string().min(1, 'permanentAddress is required'),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active')
});

export default studentValidationSchema;

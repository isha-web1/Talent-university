

export type Guardian = {
    fatherName : string,
    fatherOccupation : string,
    fatherContactNo : string,
    motherName : string,
    motherOccupation : string,
    motherContactNo : string
}

export type student = {
    id : string;
    name: {
        firstName : string;
        middleName : string;
        lastName : string
    },
    gender : "male" |"female";
    dateOfBirth : string;
    email: string;
    emergencyContactNo : string;
    contactNumber : string;
    bloodGroup :  'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress : string;
    permanentAddress : string;
    guardian : Guardian
  }
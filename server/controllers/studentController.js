import Student from '../models/Student.js'
export const createUser = async (req,res) => {
    try {
   
        const student = Student.findOne({studentId:req.body.studentID});
        if(student) {
            res.json("User exist")
            return;
        }
        else{

            const newStudent =  await Student.create({
               studentID:req.body.studentId,
               fullname : req.body.fullname,
               password:req.body.password,
           });
           await newStudent.save()
           res.status(200).json(newStudent)
        }
      
    } catch (err) {
      res.status(500).json(err.message)
    }

}
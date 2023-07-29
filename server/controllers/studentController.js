import Student from '../models/Student.js'
export const createUser = async (req,res) => {
    try {
        console.log(req.body.studentID)
        const student = await Student.findOne({studentId:req.body.studentID}).lean().exec();
        console.log(student)
        if(student) {
            res.json("User exist")
            return;
        }
        else{

            const newStudent =  await Student.create({
                studentID:req.body.studentID,
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
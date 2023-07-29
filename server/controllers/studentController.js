import Student from "../models/Student.js";
export const createUser = async (req, res) => {
  try {
    console.log(req.body.studentID);
    const student = await Student.findOne({ studentId: req.body.studentID })
      .lean()
      .exec();
    console.log(student);
    if (student) {
      res.json("exist");
      return;
    } else {
      const newStudent = await Student.create({
        studentID: req.body.studentID,
        fullname: req.body.fullname,
        password: req.body.password,
      });
      await newStudent.save();
      res.status(200).json("notexist");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const userLogin = async (req, res) => {
  const password  = req.body.password;
  const student = await Student.findOne({ studentID: req.body.studentID })
    .lean()
    .exec();
    console.log( ' pass ' + password + " " + student.password)
    console.log(student)

  if (student) {
    if (student.password === password) {
        // console.log( ' pass ' + password + " " + student.password)
        res.json("success");
    } else {
      res.json("the password is incorrect");
    }
  } else {
    res.json("not exist");
  }
};

import Student from "../models/Student.js";
export const createUser = async (req, res) => {
  try {
    const student = await Student.findOne({ studentID: req.body.studentID })
      .lean()
      .exec();
    if (student) {
      res.json("User exist");
      return;
    } else {
      const newStudent = await Student.create({
        studentID: req.body.studentID,
        fullname: req.body.fullname,
        password: req.body.password,
      });
      await newStudent.save();
      res.status(200).json(newStudent);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const userLogin = async (req, res) => {
  const { password } = req.body.password;
  const student = Student.findOne({ studentID: req.body.studentID });

  if (student) {
    if (student.password === password) {
      res.json("success");
    } else {
      res.json("the password is incorrect");
    }
  } else {
    res.json("not exist");
  }
};

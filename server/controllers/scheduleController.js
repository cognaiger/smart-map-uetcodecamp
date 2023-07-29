import Schedule from "../models/Schedule.js";

export const createSchedule = async (req, res) => {
    try {
      const schedule = await Schedule.findOne({ roomId: req.body.roomId}, {courseId: req.body.courseId},
        {date: req.body.date}, {beginTime: req.body.beginTime}, {endTime: req.body.endTime})
        .lean()
        .exec();
      if (schedule) {
        res.json("exist");
        return;
      } else {
        const newSchedule = await Schedule.create({
            roomId: req.body.roomId,
            courseId: req.body.courseId,
            date: req.body.date,
            beginTime: req.body.beginTime,
            endTime: req.body.endTime,
        });
        await newSchedule.save();
        res.status(200).json("notexist");
      }
    } catch (err) {
      res.status(500).json(err.message);
    }
  };
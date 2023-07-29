import Schedule from "../models/Schedule.js";

export const createSchedule = async (req, res) => {
    try {
        const newSchedule = await Schedule.create({
            roomId: req.body.roomId,
            courseId: req.body.courseId,
            day: req.body.day,
            beginTime: req.body.beginTime,
            endTime: req.body.endTime,
        });
        await newSchedule.save();
        res.status(200).json("notexist");
    } catch (err) {
        res.status(500).json(err.message);
    }
  };
import Event from "../models/Event.js";
import Building from "../models/Building.js";
export const createEvent = async (req, res) => {
    try {
        const newEvent = await Event.create({
            eventName: req.body.eventName,
            placeId: req.body.placeId,
            organizer: req.body.organizer,
            beginDate: req.body.beginDate,
            endDate: req.body.endDate,
            beginTime: req.body.beginTime,
            endTime: req.body.endTime,
        });
        await newEvent.save();
        res.status(200).json("notexist");
    } catch (err) {
        res.status(500).json(err.message);
    }
};

export const getAllEvents = async(req, res) =>{ 
    try {
        const allEvents = await Event.find({});
        const building = await Promise.all(allEvents.map(async(e) => await Building.find({_id: e.placeId})));
        let result = [];
        for (let i = 0; i < allEvents.length; i++) {
            let tmp = {
                "eventName": allEvents[i].eventName,
                "building": building[i][0].name,
                "organizer": allEvents[i].organizer,
                "beginDate": allEvents[i].beginDate,
                "endDate": allEvents[i].endDate,
                "beginTime": allEvents[i].beginTime,
                "endTime": allEvents[i].endTime
            }
            result.push(tmp);
        }
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err.message);
    }

}

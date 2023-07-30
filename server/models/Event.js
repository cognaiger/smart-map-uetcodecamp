import mongoose, { Schema } from "mongoose";
const eventSchema = new mongoose.Schema({
    eventName : {type:String,required: true},
    placeId: { type: mongoose.Schema.Types.ObjectId, required: true },
    organizer: {type: String, required: true},
    beginDate: {type: String, required: true},
    endDate: {type: String, required: true},
    beginTime: {type: Number, required: true},
    endTime: {type: Number, required: true},
  });
  const  Event = mongoose.model('Event', eventSchema);
  export default Event;
import mongoose from "mongoose";
const buildingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    display_name: {type:String},
    // Other building-related properties
    lat: {type: Number,required:true},
    lon:{type:Number,required:true},
    id:{type:Number}
  });

const Building = mongoose.model('Building', buildingSchema);
export default Building


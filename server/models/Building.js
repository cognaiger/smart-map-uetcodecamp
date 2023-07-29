import mongoose from "mongoose";
const buildingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // Other building-related properties
  });

const Building = mongoose.model('Building', buildingSchema);
export default Building


import mongoose from "mongoose";
const floorSchema = new mongoose.Schema({
    buildingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Building', required: true },
    floorNumber: { type: Number, required: true },
    // Other floor-related properties
  });
  const Floor = mongoose.model('Floor', floorSchema);
  export default Floor;
  
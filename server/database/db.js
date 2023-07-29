import mongoose from "mongoose";
 // Update this URI if needed

const MONGO_URI = "mongodb+srv://hiephap2003:Hiepuet2003@cluster0.zdncmb4.mongodb.net/codecamp?retryWrites=true&w=majority"

const Connection = async () => {
   
  try{
    const connection = await mongoose.connect(MONGO_URI,{useNewUrlParser:true})

    console.log("Database connect successfully")
  }
  catch(error){
    console.log('Error while connecting with database',error.message)
  }

}
export default Connection
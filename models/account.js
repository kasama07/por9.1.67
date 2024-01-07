import mongoose , {Schema}  from "mongoose";


const accountSchema = new Schema(
    {
        name:String,
        dorm:String,
        tell:String,
        img:String,
        gender:String,
        detail:String
    },
    {timestamps:true,}
);
const Acco =  mongoose.models.Acco || mongoose.model("Acco",accountSchema);
export default Acco;
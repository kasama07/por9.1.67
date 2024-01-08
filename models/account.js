import mongoose , {Schema}  from "mongoose";
const  matchSchema = new Schema(
    {
        name: String,
        dorm: String,
        detail: String,
        img: String,
        gender: String
        
    },{timestamps:true,}
);

const Account =  mongoose.models.Account || mongoose.model("Account",matchSchema);
export default Account;


import mongoose , {Schema}  from "mongoose";
const  matchSchema = new Schema(
    {
        name: String,
        dorm: String,
        tel: String,
        img: String,
        gender: String,
        detail: String
    },{timestamps:true,}
);

const Account =  mongoose.models.Account || mongoose.model("Account",matchSchema);
export default Account;


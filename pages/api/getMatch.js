import connectMongoDB from "@/libs/mongodb";
import Account from "@/models/account";
import clientPromise from "@/libs/mongoPromise";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = await  clientPromise;
    const db =  client.db("information");
    const {name,dorm,detail,img,gender} = req.body;
    const account= await db.collection("accounts").insertOne(
      {name,dorm,detail,img,gender}
    )
    res.json(account);
  }
  if (req.method === "GET") {
    await connectMongoDB();
    const account = await Account.find();
    return res.json({ account });
  }
}

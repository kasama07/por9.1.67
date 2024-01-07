import connectMongoDB from "@/libs/mongodb";
import Dors from "@/models/account";
import clientPromise from "@/libs/mongoPromise";
import Acco from "@/models/account";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = await  clientPromise;
    const db =  client.db("information");
    const {name,dorm,tell,img,gender,detail }= req.body;
    const account = await db.collection("acco").insertOne(
      {name,dorm,tell,img,gender,detail }
    )
    res.json(account);
  }
  if (req.method === "GET") {
    await connectMongoDB();
    const account = await Acco.find();
    return res.json({ account });
  }
}

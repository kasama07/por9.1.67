import styles from "./create.module.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useRouter } from "next/router";


export default function create() {
    const [name , setName] = useState("");
    const [dorm , setDorm] = useState(""); 
    const [tell , setTell] = useState(""); 
    const [img , setImg] = useState(""); 
    const [gender , setGender] = useState(""); 
    const [detail , setDetail] = useState("");  
    const router = useRouter();
    const handleSubmitt = async(e) => {
        e.preventDefault();
        if(!name || !dorm || !tell || !img || !gender || !detail ){
            console.log("Error!");
            alert("empty!!!");
        }
        else{
                try{
                  const res = await fetch("http://localhost:3000/api/getAcco", {
                    method: "POST",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({name,dorm,tell,img,gender,detail }),
                  });
                  if (res.ok) {
                    alert("addPost Success");
                    router.push("/create/match")
                  } else {
                    throw new Error("Failed to create a Data");
                  }
                }catch(e){
                  console.log(e);
                }  
            }
    }
    return (
        <div className={styles.body}>
        <Navbar/>
        <div className={styles.container}>

            <form onSubmit={handleSubmitt} className={styles.form_box} >
              <div className={styles.titleform}>
                create
              </div>
            <input className={styles.input_box} placeholder="name" type="text"
            onChange={(e) => setName(e.target.value)} value={name} />

            <input className={styles.input_box} placeholder="dorm" type="text"
            onChange={(e) => setDorm(e.target.value)} value={dorm}/> 

            <input className={styles.input_box} placeholder="tell" type="text"
            onChange={(e) => setTell(e.target.value)} value={tell}/>

            <input className={styles.input_box} placeholder="img URL" type="text"
            onChange={(e) => setImg(e.target.value)} value={img}/>

            <input className={styles.input_box} placeholder="gender" type="text"
            onChange={(e) => setGender(e.target.value)} value={gender}/>

            <input className={styles.input_detail} placeholder="detail" type="text"
            onChange={(e) => setDetail(e.target.value)} value={detail}/>

            <button type="submit" className={styles.send_btn}>Send data</button>
            </form>
        </div>    
    </div>
    )



}
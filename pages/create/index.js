import styles from "./create.module.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useRouter } from "next/router";

export default function create() {
    const [name , setName] = useState("");
    const [dorm , setDorm] = useState("");
    const [detail,setDetail] = useState("");
    const [gender,setGender] = useState("");
    const [img,setImg] = useState("");
    const router = useRouter();
    const handleSubmitt = async(e) => {
        e.preventDefault();
        if(!name || !dorm || !detail || !img || !gender ){
            console.log("Error!");
            alert("empty!!!");
        }
        else{
                try{
                  const res = await fetch("http://localhost:3000/api/getMatch", {
                    method: "POST",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({name,dorm,detail,img,gender}),
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
              <div className={styles.textbox}>
                <span>
                  <div className={styles.textboxone}>
                     Welcome !
                  </div>
                  <div>
                     Please fill in the information and than pair.
                </div>
                </span>
              </div>
              <div className={styles.inputbox}>
                <div className={styles.titleform}>
                   create
                </div>
                <input type="text"  placeholder="name" value={name} 
                onChange={(e) =>{setName(e.target.value)}}/>

                <input type="text" placeholder="img" value={img}
                onChange={(e) => {setImg(e.target.value)}}/>

                <input type="text" placeholder="dorm" value={dorm}
                onChange={(e) => {setDorm(e.target.value)}}/>

                <input type="text" placeholder="gender" value={gender}
                onChange={(e) => {setGender(e.target.value)}}/>

                <input type="text" placeholder="detail" value={detail}
                onChange={(e) => {setDetail(e.target.value)}}/>

                <button type="submit" className={styles.send_btn}>Send data</button>
              </div>
            </form>
        </div>    
    </div>
    )



}
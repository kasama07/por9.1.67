import styles from "./create.module.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useRouter } from "next/router";

export default function create() {
    const [name , setName] = useState("");
    const router = useRouter();
    const handleSubmitt = async(e) => {
        e.preventDefault();
        if(!name  ){
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
                    body: JSON.stringify({name}),
                  });
                  if (res.ok) {
                    alert("addPost Success");
                    router.push("/")
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
         <input type="text"  placeholder="name" value={name} 
         onChange={(e) =>{setName(e.target.value)}}/>

            <button type="submit" className={styles.send_btn}>Send data</button>
            </form>
        </div>    
    </div>
    )



}
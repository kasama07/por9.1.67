import styles from '@/pages/create/match/math.module.css'
import Link from 'next/link';
import { useState,useEffect } from 'react';
import Navbar from '@/components/Navbar';



const getMatch = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/getMatch", {
          cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        else{
            console.log("Information complete")
        }
          return res.json();
    }     catch (error) {
          console.log("Error loading topics: ", error);
    }
};
export default function Home() {
    const [data, setData] = useState(null);
    const [dormInput,setDormInput] = useState('');
    const handleInputChange = (event) => {
        setDormInput(event.target.value);
    };

    
    useEffect(() => {
      getMatch().then((d) => {
        setData(d);
      });
    }, []);

    return (
        
        <div className={styles.body}>
            <Navbar/>
            <h1> match </h1>

            <input className={styles.input_box}
                type='text'
                placeholder='กรอก'
                value={dormInput}
                onChange={handleInputChange}
            />
            {data?.account?.map((d) => 
                d.dorm === dormInput && (
                    <div key={d._id} >
                        <div className={styles.roomBox}>
                            <div className={styles.imgBox}><img src={d.img} width={500} height={400} alt='img'></img></div>
                            <div className={styles.dormBox}>หอ : {d.dorm}</div>
                            <div className={styles.detailBox}>name : {d.name}</div>
                            <div className={styles.detailBox}>gender : {d.gender}</div>
                            <div className={styles.detailBox}>detail : {d.detail}</div>
                            <button type="submit" className={styles.buttommatch}>เลือก</button>
                        </div>
                    </div>
                )
            )}
        </div>
    )

}
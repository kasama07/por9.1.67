import Image from 'next/image';
import Link from 'next/link';
import styles from '@/pages/create/match/math.module.css'
import { useState,useEffect } from 'react';


const getDors = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/getDors", {
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
    const [dors, setDors] = useState(null);
    const [dormInput,setDormInput] = useState('');
    const handleInputChange = (event) => {
        setDormInput(event.target.value);
    };

    
    useEffect(() => {
      getDors().then((d) => {
        setDors(d);
      });
    }, []);

    return (
        <div className={styles.roomcomponents}>
            <h1> match </h1>

            <input className={styles.input_box}
                type='text'
                placeholder='กรอก'
                value={dormInput}
                onChange={handleInputChange}
            />

            
        
            

            {dors?.dormitory?.map((d) => 
                d.dorm_name === dormInput && (
                    <div key={d._id}>
                    <div className={styles.roomBox}>
                        <div className={styles.imgBox}>
                            <img src={d.img} width={400} height={300} alt='img'></img>
                        </div>
                        <div className={styles.textBox}>
                            <div className={styles.textBox1}>
                                <div className={styles.dormNameBox}>
                                    {d.dorm_name}
                                </div>
                            </div>
                        </div>
                        <div className={styles.priceBox}>
                            <div className={styles.price}>
                                <span>detail:</span>{d.detail}
                            </div>
                        </div> 

                    </div>
                </div>
                )
            )}
        </div>
    )

}
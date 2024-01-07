
import styles from '@/pages/create/match/math.module.css'
import { useState,useEffect } from 'react';


const getAccount = async () => {
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
      getAccount().then((d) => {
        setData(d);
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
            {data?.account?.map((d) => 
                d.name === dormInput && (
                    <div key={d._id}>
                    {d.name}
                    </div>
                )
            )}
        </div>
    )

}
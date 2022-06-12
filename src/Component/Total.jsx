import React, { useEffect, useState } from 'react';
import styles from './All.module.css'; 

const Total = () => {
    const [show, setshow] = useState([]);
    
    useEffect(() => {
       fetch("http://localhost:8080/todosdb")
       .then((r)=> r.json())
       .then((e)=>setshow(e))   
      
    }, [])
    

    
    return (
    <div>
        <h2 style={{textDecoration:"underline"}}>Todo-List :-</h2>

        {show.map((el)=>(

            <div key={el.id}>
                <ul className={styles.total}>
                    <li>{el.value}</li>
                </ul>
                {/* <h4>{el.value}</h4> */}
                {/* <h2>{el.isCompleted === false ? el.value: ""}</h2> */}

            </div>
        ))}

    </div>
  )
}

export default Total
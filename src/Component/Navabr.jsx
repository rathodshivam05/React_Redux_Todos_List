import React from 'react'
import { Link } from 'react-router-dom';
import styles from './All.module.css'; 


const Navabr = () => {
  return (
    <div className={styles.navbar}>
        <Link  to={"/"}>
          
          <p>Home</p>
        </Link>
        <Link to={"/total"}>
          
        <p>Total Todos</p>
        </Link>
    </div>
  )
}

export default Navabr
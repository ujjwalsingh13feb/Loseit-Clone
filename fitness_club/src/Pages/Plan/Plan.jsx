import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import styles from "../../All style module/Plan.module.css";
import star from "./star.png";
import logo from ".//..//../Images/FitnessClub.png";
import madel from ".//..//../Images/madale.svg";


let Total_H= JSON.parse(localStorage.getItem("weightH"));
let Total_W = JSON.parse(localStorage.getItem("weightU"));
const sum = (66.5+ 13.8*(+Total_W.curWeight)+5*(+Total_H.height)-6.8*(Total_H.age))

//import { SiTrustpilot } from "react-icons/si";
//FcCalendar FcRating
const Plan = () => {

const [date,setDate] = useState("")
    let handleContinue=()=>{
        const today = new Date()
        let m = today.toLocaleString('default', { month: 'long' })
        let t = today.getDate()
        let y = today.getFullYear()
        setDate(`${m} ${t}, ${y}`)
        
    }
    useEffect(() => {
      handleContinue()
      return () => {
        
      }
    }, [date])
    
     


  return (
    <div>

     <div className={styles.headerDiv}>
      <Link to={"/"}><img className={styles.headerImg} src={logo} alt='header'/></Link>
     </div>

     <div className={styles.middleInsideDiv}>
      <div className={styles.arrow}><Link  to={"/birthday"}><button>{"<"}</button></Link></div>
       
      <h1 className={styles.currentW} >Your personal weight loss plan is ready.</h1>
      <div className={styles.watermelonDiv}> <img className={styles.watermelonImg} src="https://cdn-icons-png.flaticon.com/512/878/878030.png" alt="wm" />
        <div className={styles.watermelonInsideDiv}>
            <h1 className={styles.daily}>Daily calorie budget:</h1>
            <h1>{sum*1.4} calories</h1>
        </div>
      </div>
      {/* //<Total weight loss:/> */}
      <div className={styles.calenderDiv}> 
      <img className={styles.watermelonImg} src={madel} alt="cal" />
        <div className={styles.calenderInsideDiv}>
            <h1>Total weight loss:</h1>
            <h1>5 kilograms</h1>
        </div>
      </div>


    {/* //<IoCalendarOutline/> */}
      <div className={styles.calenderDiv}> 
      <img className={styles.watermelonImg} src="https://cdn-icons-png.flaticon.com/512/2370/2370271.png" alt="cal" />
        <div className={styles.calenderInsideDiv}>
            <h1>Weekly weight loss</h1>
            <h1>¾ kilogram</h1>
        </div>
      </div>




      {/* <SiTrustpilot fontSize={"50px"} color="yellowgreen"/>  */}
      <div className={styles.calenderDiv}> 
      <img className={styles.watermelonImg} src={star} alt="wm"/>
      
        <div className={styles.calenderInsideDiv}>
            <p>Goal date:</p>
            <h1>{date}</h1>
        </div>
      </div>

      <br/>

      <br/>

        <Link to={"/signup"}><button className={styles.btnYes}>Get Lose it!</button></Link>
        <br/>
        
      </div>




    </div>
  )
}

export default Plan
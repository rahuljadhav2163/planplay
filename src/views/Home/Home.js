import logo from "./planplayyy.png"
import "./Home.css";
import React, { useState } from 'react'
import Plan from "./../../components/Plan/Plan"
 
 const Home = () => {
   const [planList , setPlanaList] = useState([
    {
        title:"Trip",
        plan :"Go to Mahabaleshwar",
        callback : "Buy a Strawberry",
        date : "29-11-2023"
    },
    {
        title:"Marrige",
        plan :"Attend the marrige at Pune.",
        callback : "Give a bless",
        date : "5-11-2023"
    },
    {
        title:"Temple",
        plan :"Go to Bappas temple",
        callback : "Buy a coconut",
        date : "11-11-2023"
    }
])

   return (
<div className="heading-container">
    <img className="app-logo" src={logo}/>
<p className="app-title">
        PlanPlay
     </p>
     <p className="app-title-slogen">Streamline Your Day with PlanPlay..!</p>

     <div className="container-for-flex">

        <div className="textofcontent">
           <span className="planofu"> Your Plan 🥂</span>

            {
                  
                  planList.map((planItem , index)=>
                  {
                        const {title, date , plan , callback} = planItem;

                        return <Plan title={title} date={date} plan={plan} callback={callback}/>
                  })

            }
        </div>

        <div className="textofcontent">
          
          <span className="planofu">Add New Plan ➕</span>

          <div className="plan-add-container">
               <span> Plan Title :</span>
            <input type="text" />

          </div>
        </div>

     </div>
</div>

      

   )
 }
 
 export default Home
 
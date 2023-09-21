import logo from "./planplayyy.png"
import "./Home.css";
import React, { useEffect, useState } from 'react'
import Plan from "./../../components/Plan/Plan"
 
 const Home = () => {
   const [planList , setPlanaList] = useState([
    {
        title:"Trip",
        plan :"Go to Mahabaleshwar",
        callback : "Buy a Strawberry",
        date : "29-11-2023"
    },
])
const [date, setDate]=useState();
const [title, setTitle]=useState();
const [plan, setPlan]=useState();
const [callback, setCallback]=useState();

useEffect(()=>{
    const list = JSON.parse(localStorage.getItem('planplay'));
    setPlanaList(list)
})


const addPlanLocalStorage = (plans)=>{
    localStorage.setItem('planplay', JSON.stringify(plans))
}


function addplan(){

    const randomId = Math.floor(Math.random()*1000);
    const obj={
        id : randomId,
        date:date,
        title:title,
        plan:plan,
        callback:callback,
   }

   const newPlanList = [...planList , obj]

   setPlanaList(newPlanList)


   setPlanaList([...planList, obj])
   setDate('')
   setTitle('')
   setPlan('')
   setCallback('')

   addPlanLocalStorage(newPlanList);

};

 const  removeplan = (id) =>{
    let index;

    planList.forEach((plan,i)=>{
        if(plan.id==id){
            index = i;
        }
    })

   
    const tempArr = planList;
    tempArr.splice(index,1);

    

    setPlanaList([...tempArr])

    addPlanLocalStorage(tempArr)
}



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
                        const {id, title, date , plan , callback} = planItem;

                        return <Plan key={index} id={id} title={title} date={date} plan={plan} callback={callback} removeplan={removeplan} />
                  })

            }
        </div>

        <div className="textofcontent">
          
                  
           <span className="planofu">Add New Plan <span className="btn-addd"> <i class="bi bi-file-earmark-plus"></i></span></span>


          <div className="plan-add-container">

               <span className="input-box"> Plan Title :</span><br/>
            <input className="input" type="text" placeholder="Title"
             value={title}

             onChange={(e)=>{
                 setTitle(e.target.value)
                 
             }}
            /><br/>


            <span className="input-box"> Plan :</span><br/>
            <input className="input" type="text" placeholder="Plan"
             value={plan}

             onChange={(e)=>{
                 setPlan(e.target.value)
                 
             }}
            /><br/>


            <span className="input-box">Callback :</span><br/>
            <input className="input" type="text" placeholder="Callback"
             value={callback}

             onChange={(e)=>{
                 setCallback(e.target.value)
                 
             }}
            /><br/>


            <span className="input-box">Date :</span><br/>
            <input className="input" type="date" placeholder="Date"
             value={date}

             onChange={(e)=>{
                 setDate(e.target.value)
                 
             }}
            /><br/>


            <button  onClick={addplan} type="button" className="btn-save">
                Add Plan <i className="bi bi-clipboard-plus-fill"></i>
            </button>

          </div>
        </div>

     </div>
</div>

      

   )
 }
 
 export default Home
 
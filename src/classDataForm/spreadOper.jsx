import React, { useState } from "react";
import classes from "./spreadOper.module.css";


const LearnObjs=()=>{


// -------------------------------4RD---- ----------------------------------------


    const [currData, updData]= useState(
        {
            myName:"",
            myRoll:null,
            myClass:null,
            myDate:null,
        }
    );


// -------------------------------2ND---- ----------------------------------------

    const handleData=(e)=>{
        e.preventDefault();


        
        updData({
            myName:[formData.naming],
            myRoll:[formData.rolling],
            myClass:[formData.classing],
            myDate:[formData.dating]
        })

       

    
    

    }

    


// -------------------------------1ST---- ----------------------------------------

    const [formData, updFormData]= useState(
        {
            naming:"",
            rolling:"",
            classing:"",
            dating:"",
        }



        
    );

    
// -------------------------------BTN1 HERE----------------------------------------

    const kuchKar=(e)=>{

        const noom=e.target.name;
        const vool=e.target.value;
        
        updFormData({...formData,[noom]:vool})
        

        // console.log({...formData,[noom]:vool})

        
    
       


    }

    // ----------------------------BTN3 HERE TO CLEAR-------------------------------------------

    const handleDataToClr=(e)=>{
        e.preventDefault();
        updData({
              
            myName:"",
            myRoll:"",
            myDate:"",
            myClass:"",
        });

        updFormData({
            naming:"",
            rolling:"",
            classing:"",
            dating:"",
        });

    }

// -------------------------------BTN2 ----------------------------------------

const handleDataToSrch=(e)=>{
    // const rollToSrch=formData.rolling;

    
}



    return(

    <div className={classes.divv}>
        <h1 className={classes.hed}>JUST DO IT 🤙</h1>
        <form onSubmit={handleDataToSrch} action="./formData.json" className={classes.formed}>

            <label className={classes.labeled}> Name  &nbsp;&nbsp;
            <input className={classes.inputed} type="text" value={formData.naming} name="naming" onChange={kuchKar}/>

            </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label className={classes.labeled}> Roll no. &nbsp;&nbsp;

            <input className={classes.inputed} type="number" value={formData.rolling} name="rolling" onChange={kuchKar}/>

            </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label className={classes.labeled}> Class &nbsp;&nbsp;

            <input className={classes.inputed} type="number" value={formData.classing} name="classing" onChange={kuchKar}/>

            </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label className={classes.labeled}> Date &nbsp;&nbsp;

            <input className={classes.inputed} type="date" value={formData.dating} name="dating" onChange={kuchKar}/>

            </label>

            <div className="buttons">
            <button id={classes.buttoned} className={classes.btn1} onClick={handleData}> UPDATE / SHOW </button>
            <br/>
            <br/>
            <button id={classes.buttoned} className={classes.btn2} onClick={handleDataToClr}> CLEAR </button>
            </div>

        </form>

        <h1 className={classes.hed}>Name:{currData.myName}  &nbsp; Roll:{currData.myRoll}  &nbsp; Class:{currData.myClass} &nbsp; Date:{currData.myDate} &nbsp;   🤙</h1>


    </div>
    );
}

export default LearnObjs;
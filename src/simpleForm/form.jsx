import { useState } from "react";
// import "../simpleForm/index.module.css";
import classona from "../simpleForm/form.module.css"

const FormWithVals = () =>{

    const [currV, updV]= useState(
        {
        naming: "",
        emailing: "",
        passwording: "",
        newPasswording: "",
            
        }
    );
    

    const handleINPUT =(e)=>{
        
        const naam=e.target.name;
        const vaal=e.target.value;

        console.log(naam, vaal)
        updV({...currV, [naam]:vaal})
    }

    const kaamKer = (event)=> {
        event.preventDefault();
            
    }


    return(
    <form  onSubmit={kaamKer} className={classona.forming}>
        <label> name
        <input className={classona.inputing} autoComplete="off" type="text"  value={currV.naming} name="naming" onChange={handleINPUT}/>
        </label>
        
        <br/><br/>

        <label> email
        <input className={classona.inputing} autocomplete="off" type="email" value={currV.emailing} name="emailing" onChange={handleINPUT}/>
        </label>
        
        <br/><br/>

        <label> password
        <input className={classona.inputing} autocomplete="off" type="password" value={currV.passwording} name="passwording" onChange={handleINPUT}/>
        </label>

        <br/><br/>

        <label> new password
        <input className={classona.inputing} autocomplete="off" type="password" value={currV.newPasswording} name="newPasswording" onChange={handleINPUT}/>
        </label>

        <input className={classona.inputingBtn}  type="submit"></input> 
    </form>
    );
}

export default FormWithVals;
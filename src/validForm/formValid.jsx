import React, { useState } from "react";
import "../validForm/formValid.css"
import validate from "./dataValidation";
import { arrErr } from "./dataValidation";

const FormForValid=()=>{


    const [currVal,settingVal]=useState({

        _name_:"",
        _phone_:"",
        _email_:"",
        _message_:"",
        

    });

    const [errVal, settingErrVal]= useState(

        {
            errorName:"",
            errorPhone:"",
            errorEmail:"",
            errorMsg:"",
        }


    );



    const handle_typing = (e)=>{


        settingVal({...currVal,[e.target.name]:e.target.value});

        console.log(e.target.name,e.target.value)


    }

    const handle_clicking=(e)=>{
        e.preventDefault();

        validate(currVal)//----------------------- call to DataValidation.jsx

       
        settingErrVal(
            {
                errorName:arrErr[0],
                errorPhone:arrErr[1],
                errorEmail:arrErr[2],
                errorMsg:arrErr[3],
            }
        )

            console.log(arrErr)
        
            if(arrErr[0]){
                console.log("not sub1")
            }
            if(arrErr[1]){
                console.log("not sub2")
            }
            if(arrErr[1]){
                console.log("not sub3")
            }

            var a=true;

            for(var x=0;x<arrErr.length;x++){
                // console.log(arrErr[x])
                if(arrErr[x]!=null){
                    a=false;
                }

                
            }
            if(a===true){
                alert("submitted")
            }
            else{
                return false;
            }
                   
           
            






        


    }
    

    




    return(

        <form className="form" >
            <label className="title">FORM_FOR_REACT</label>
            <br ></br>
            <br></br>
            <label className="labelling"  >
            Name  
            
            <input  type="text" placeholder="NAME" name="_name_" value={currVal._name_} onChange={handle_typing} />
            </label>

            <p className="errMsg" name="errorName" >{errVal.errorName}</p>


            <label className="labelling" >
            Phone 
            
            <input type="tel" placeholder="PHONE" name="_phone_" value={currVal._phone_} onChange={handle_typing} />
            </label>

            <p className="errMsg" name="errorPhone" >{errVal.errorPhone}</p>


            <label className="labelling" >
            Email 
            
            <input type="email" placeholder="EMAIL" name="_email_" value={currVal._email_} onChange={handle_typing} />
            </label>

            <p className="errMsg" name="errorEmail" >{errVal.errorEmail}</p>


            <label className="labelling" >
            Message 
            
            <textarea placeholder="ENTER HERE..." name="_message_" value={currVal._message_} onChange={handle_typing}   />

            <p className="errMsg" name="errorMsg" >{errVal.errorMsg}</p>
            
            </label>
            


            <input type="submit" onClick={handle_clicking}/>
        </form>
            
        
    );

}

export default FormForValid;
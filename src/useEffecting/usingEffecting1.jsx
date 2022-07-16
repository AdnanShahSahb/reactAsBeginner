import { useEffect, useState } from "react";


const IncUsingEffect =()=>{

    const [num, updNum]= useState(0);
    const [nums, updNums]= useState(0);

    useEffect(
        ()=>{
            alert("helulululu")
        },[num]
    )

    const updating=()=>{
        updNum(
        num+1
        );


    
    }

    

    return(
        <>
        <h1 onClick={updating}>TIK TOK single increment <b>{num}</b>     <i>Click here</i></h1>
        <br/><br/>
        <h1 onClick={ ()=>{updNums(nums+2); } }>TIK TOK double increment <b>{nums}</b>     <i>Click here</i></h1>
        </>

    );

}

export default IncUsingEffect;
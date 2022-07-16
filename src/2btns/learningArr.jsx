import { useState } from "react";
import classes from "../2btns/learningArr.module.css"

const LearningArr=()=>{

    const data=[
        {
            id:0,   name: "adnan", age:32, color: "black"
        },
        {
            id:1,   name: "anas", age:30, color: "grey"
        },
        {
            id:2,   name: "manzar", age:32, color: "blue"
        }
        
    ]

    const [currData, updData]= useState(data);

    const toClear=()=>{
        updData([]);

    }

    const toUnclear=()=>{

        updData(data)

    }



    return(
        <>
            <div className={classes.divinging}>
                {
                    currData.map((e)=>{
                        return <h1 key={e.id}>Name: {e.name} Age: {e.age} color: {e.color} </h1> 
                        }
                    )
                }
            <button className={classes.btn3} onClick={toClear}>just clear</button>
            <button className={classes.btn3} onClick={toUnclear}>just show</button>

            </div>

        </>
    );
}

export default LearningArr;
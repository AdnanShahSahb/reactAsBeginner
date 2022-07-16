import React from "react";
import Card from "./Cards";
import "./card.css";
import seasonData from "./dataS";

const Netflixing =()=>{

    
    return(

    <>


        {seasonData.map((values)=>{
            
            return(

            <Card 
            imgSrc={values.imgSrc}
            sName={values.sName}
            linking={values.linking}

            />);

        })}
        
    </>
    );

}

export default Netflixing;
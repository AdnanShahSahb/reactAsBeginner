import "./card.css";
import React from "react";

function Card (props){

    // console.log(props);
    return(
      <div className="cards">
        <div className="card">
          <img src={props.imgSrc} alt="myPic" className="card_img"/>
          <div className="card_info">
            <span className="card_catg"> Any series ! </span>
            <h3 className="card_title"> {props.sName} </h3>
  
              <a href={props.linking}>
                <button>Watch Now</button>
              </a>
  
          </div> 
  
        </div>
  
      </div> 
  
    );
  
  }

  export default Card; 
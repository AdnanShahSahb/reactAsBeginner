import IncUsingEffect from "../src/useEffecting/usingEffecting1";
import FetchingUsingEffect from "../src/useEffecting/usingEffecting2";
import LearningArr from "../src/2btns/learningArr";
import FormWithVals  from "../src/simpleForm/form";
import LearnObjs from "../src/classDataForm/spreadOper";

import { useState } from "react";



// import FormForValid from "../src/validForm/formValid";

// import Netflixing from "../src/netflix/NetflixApp";




const App121 = () => {
    const[choose,setChoose]=useState(0);



    return(
        <>
<nav class="navbar navbar-dark bg-dark navbar-expand-lg ">
  <a class="navbar-brand" href="#">Beginner's Work</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li className= {choose===1?"nav-item active":"nav-item"}>
        <a class="nav-link" onClick={()=>{setChoose(1)}}>incrementUsingEffect <span class="sr-only">(current)</span></a>
      </li>
      <li className= {choose===2?"nav-item active":"nav-item"}>
        <a class="nav-link" onClick={()=>{setChoose(2)}}>FetchingUsingEffect</a>

      </li>
      <li className= {choose===3?"nav-item active":"nav-item"}>
        <a class="nav-link" onClick={()=>{setChoose(3)}}>ArrayWIthStates</a>
      </li>
      <li className= {choose===4?"nav-item active":"nav-item"}>
        <a class="nav-link" onClick={()=>{setChoose(4)}}>FormWithVals</a>
      </li>
      <li className= {choose===5?"nav-item active":"nav-item"}>
        <a class="nav-link" onClick={()=>{setChoose(5)}}>manageInputs/SpreadOper</a>
      </li>
    </ul>
  </div>
</nav>
        {/* <nav class="navbar navbar-dark bg-dark">

        <button className="btn btn-dark" onClick={()=>{setChoose(1)}}>incrementUsingEffect</button>
        <button className="btn btn-dark" onClick={()=>{setChoose(2)}}>FetchingUsingEffect</button>
        <button className="btn btn-dark" onClick={()=>{setChoose(3)}}>ArrayWIthStates</button>
        <button className="btn btn-dark" onClick={()=>{setChoose(4)}}>FormWithVals</button>
        <button className="btn btn-dark" onClick={()=>{setChoose(5)}}>manageInputs/SpreadOper</button>

        </nav> */}

        <br/>   

        {choose===1?<IncUsingEffect/>:<></>}
        {choose===2?<FetchingUsingEffect/>:<></>}
        {choose===3?<LearningArr/>:<></>}
        {choose===4?<FormWithVals/>:<></>}
        {choose===5?<LearnObjs/>:<></>}

        </>
    )
    


    // return( < FormForValid/> );

    // return ( <Netflixing /> );


}


export default App121;
import React from "react";
import ForwardDefenceFunc from "./ForwardDefence";
import CustomTrainingFunc from "./CustomTraining";
import GoaltendingFunc from "./Goaltending";

function Lessons() {
    return (
      
      <div className="Lessons">
        <div className="content">
           <CustomTrainingFunc/>
           <ForwardDefenceFunc />
           <GoaltendingFunc />
            
            
            
        
        </div>
      </div>
      
    );
    
  }
  export default Lessons;
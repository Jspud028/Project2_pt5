import React from "react";
import AboutOurTeamFunc from "./AboutOurTeam";
import AboutUsLabelFunc from "./AboutUsLabel";
import ActionShotFunc from "./ActionShot";
import FindBracketFunc from "./FindBracket";

function AboutUs() {
    return (
      
      <div className="AboutUs">
        <div className="content">
           <ActionShotFunc />
           <AboutUsLabelFunc />
           <AboutOurTeamFunc />
           <FindBracketFunc />
            
            
            
        
        </div>
      </div>
      
    );
    
  }
  export default AboutUs ;
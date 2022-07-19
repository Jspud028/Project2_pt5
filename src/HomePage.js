import React from "react";
import UpcomingEventsThing from "./UpcomingEvents";
import HomeMessage from "./HomeMessage";
import WelcomeHere from "./WelcomeHere";
import FaceOff from "./Faceoff";
import GoalieCrease from "./GoalieCrease";
import LabelsFunc from "./Labels";

function HomePage() {
    return (
      
      <div className="HomePage">
        <div className="content">
            <UpcomingEventsThing />
            <HomeMessage />
            <WelcomeHere />
            < LabelsFunc />
            <FaceOff />
            <GoalieCrease />
            
            
        
        </div>
      </div>
      
    );
    
  }
  export default HomePage;
  




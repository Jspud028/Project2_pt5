import React from "react";
import LeaguePlayFunc from "./LeaguePlay";
import CarPoolSignupFunc from "./Carpool";
import RinkLocationsFunc from "./RinkLocations";
import OurRinkLocationsFunc from "./OurRinkLocations";


function ClubPlay() {
    return (
      
      <div className="ClubPlay">
        <div className="content">
           <LeaguePlayFunc />
           <CarPoolSignupFunc />
           <OurRinkLocationsFunc />
           <RinkLocationsFunc />

            
            
            
        
        </div>
      </div>
      
    );
    
  }
  export default ClubPlay;
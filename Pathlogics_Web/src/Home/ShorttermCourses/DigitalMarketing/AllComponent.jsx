import React from "react";
import DigitalPlacement from "./DigitalPlacement";
import DigitalJourney from "./DigitalJourney";
import DigitalOverview from "./DigitalOverview";
import DigitalLogo from "./DigitalLogo";
import DigitalModules from "./DigitalModules";
import Courses from "./Courses";
import Testimonials from "./Testimonials";
import Company from "./Company";
import DigitalStack from "./DigitalStack";
function AllComponent(){
    return(<>
    
    <DigitalPlacement/>
    <DigitalJourney/>
    <DigitalOverview/>
    <DigitalStack/>
    <DigitalLogo/>
    <DigitalModules/>
    <Courses/>
   <Testimonials/>
   <Company/>
    </>)
}
export default AllComponent;
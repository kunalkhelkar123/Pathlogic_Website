import React from "react";
import JavaFirstPage from "./JavaFirstPage";
// import Journey from "./Journey";
import DotJourney from "../DotNet/DotJourney";
import JavaOverview from "./JavaOverview";
import Curriculum from "./Curriculum";
import Modules from "./Modules";
import Courses from "./Courses";
import Placement from "./Placement";
import JavaComp from "./JavaComp";
import JavaStack from "./JavaStack";
function JavaComponent(){
    return(<>
        <JavaFirstPage/>
        <DotJourney/>
        <JavaOverview/>
        <JavaStack/>
       <Curriculum/>
       <Modules/>
       <Courses/>
       <Placement/>
       <JavaComp/>
        </>)

}
export default JavaComponent;
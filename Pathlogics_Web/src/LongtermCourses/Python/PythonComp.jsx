import React from "react";
import PythonFirst from "./PythonFirst";
import DotJourney from "../DotNet/DotJourney";
import PythonOverview from "./PythonOverview";
import PythonStack from "./PythonStack";
import PythonCurriculum from "./PythonCurriculum";
import PythonModule from "./PythonModule";
import Courses from "../JavaDev/Courses";
//import Testimonials from "../../Testimonials/Testimonials";
import Placement from "../JavaDev/Placement";
import JavaComp from "../JavaDev/JavaComp";

function PythonComp(){
    return(<>
    <PythonFirst/>
    <DotJourney/>
    <PythonOverview/>
    <PythonStack/>
    <PythonCurriculum/>
    <PythonModule/>
    <Courses/>
    {/* <Testimonials/> */}
    <Placement/>
   <JavaComp/>
    </>)
}
export default PythonComp;
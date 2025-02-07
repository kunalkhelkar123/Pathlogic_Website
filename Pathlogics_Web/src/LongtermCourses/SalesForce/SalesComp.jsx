import React from "react";
import SalesFirst from "./SalesFirst";
import DotJourney from "../DotNet/DotJourney";
import SalesStack from "./SalesStack";
import SalesOverview from "./SalesOverview";
import SalesCurriculum from "./SalesCurriculum";
import SalesModule from "./SalesModule";
import Courses from "../JavaDev/Courses";
//import Testimonials from "../../Testimonials/Testimonials";
import Placement from "../JavaDev/Placement";
import JavaComp from "../JavaDev/JavaComp";
function SalesComp(){
    return(<>
    <SalesFirst/>
    <DotJourney/>
    <SalesOverview/>
    <SalesStack/>
    <SalesCurriculum/>
    <SalesModule/>
    <Courses/>
    {/* <Testimonials/> */}
    <Placement/>
   <JavaComp/>
    </>)
}
export default SalesComp;
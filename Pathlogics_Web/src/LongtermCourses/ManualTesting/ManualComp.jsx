import React from "react";
import ManualFirstPage from "./ManualFirstPage";
import DotJourney from "../DotNet/DotJourney";
import ManOverview from "./ManOverview";
import ManualStack from "./ManualStack";
import ManualCurriculum from "./ManCurriculum";
import Courses from "../JavaDev/Courses";
//import Testimonials from "../../Testimonials/Testimonials";
import Placement from "../JavaDev/Placement";
import JavaComp from "../JavaDev/JavaComp";
import ManModule from "./ManModule";
function ManualComp(){
    return(<>
    <ManualFirstPage/>
    <DotJourney/>
    <ManOverview/>
    <ManualStack/>
    <ManualCurriculum/>
    <ManModule/>
    <Courses/>
    {/* <Testimonials/> */}
    <Placement/>
   <JavaComp/>
    </>)
}
export default ManualComp;
import React from "react";
// import FullstackWeb from "./Fullstackweb/FullstackWeb";
// import FullJava from "./Fullstackweb/FullJava";
import FullstackWeb from "./FullstackWeb";
import FullWeb from "./FullWeb";
import WebOverview from "./WebOverview";
import WebHome from "./WebHome";
import WebMern from "./WebMern";
import WebAccording from "./WebAccording";
import WebCompany from "./WebCompany";
import WebCamping from "./WebCamping";
import CourseJourney from "./CourseJourney";
import JobPortal from "./JobPortal";
import WebCurriculum from "./WebCurriculum";
import CoreWeb from "./CoreWeb"
import PlacmentWeb from "./PlacementWeb";
import WebTestimonial from "./WebTestimonial";
//import WebJourney from "./WebJourney";
import DotJourney from "../DotNet/DotJourney";
function Courses(){
    return(<>
    {/* <FullWeb/> */}
    <CoreWeb/>
    {/* <WebJourney/> */}
    <DotJourney/>
    {/* <WebHome/> */}

    {/* <WebMern/> */}
    {/* <WebCamping/> */}
    <WebOverview/>
    {/* <WebJourney/> */}
    {/* <FullWeb/> */}
    <WebMern/>
    <WebCurriculum/>
    <WebAccording/>
    <PlacmentWeb/>
    {/* <FullstackWeb/> */}
    {/* <CourseJourney/> */}
   {/* <WebAccording/> */}
    {/* <FullWeb/> */}
    {/* <JobPortal/> */}
    <WebTestimonial/>
   <WebCompany/>

    </>)
}
export default Courses;
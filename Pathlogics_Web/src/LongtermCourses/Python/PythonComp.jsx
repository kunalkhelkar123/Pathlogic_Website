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
import PythonCertificate from "./PythonCertificate";
import PaidInternship from "../FullStackSalesforceDevelopment/PaidInternship";
import Institutecertificate from "../Python/Institutecertificate"
import Explorecourses from "../Python/Explorecourses"
import Testimonials from "../Reviews/Testimonials";
import Companies from "../Companies/Companie";
import PythonFAQ from "./PythonFAQ";
import Talk_to_Our_Advisor from "../FullStackSalesforceDevelopment/Talk_to_Our_Advisor"
function PythonComp(){
    return(<>
    <PythonFirst/>
    {/* <DotJourney/> */}
    <PythonCertificate/>
    <PythonOverview/>
    <PythonStack/>
    <PythonCurriculum/>
    <PaidInternship/>
    <Courses/>
    {/* <Testimonials/> */}
    <Placement/>
   <JavaComp/>
   <Institutecertificate/>
   <Explorecourses/>
     <Testimonials />
     <Companies />
     <PythonFAQ/>
     <Talk_to_Our_Advisor />
     
  
    </>)
}
export default PythonComp;
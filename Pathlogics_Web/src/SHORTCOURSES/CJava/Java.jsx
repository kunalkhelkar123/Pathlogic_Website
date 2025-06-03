import React from 'react'
import Java1 from './ShortTermJava'
import Java2 from './JavaJourney'
import Java3 from './MasterJava'
import Java4 from './JavaCurriculum'
import Java5 from './ProgramOJava'
import Java6 from './JavaModules'
import MoreCourses from '../Salesforce Developer/MoreCourses'
import Testimonials from '../../Home/Testimonials/Testimonials'
import Companie from '../../Fullstack/Companies/Companie'
import JavaInfo from './JavaInfo'
import Internship from "./Internship"
import JavaOverview from "./JavaOverview"
import CareerOptions from "./CareerOptions"
import JavaCertificate from "./JavaCertificate"
import JavaFAQ from "./JavaFAQ"
import Talk_to_Our_Advisor from "../../../src/LongtermCourses/FullStackWebDevelopement/Talk_to_Our_Advisor"
export default function Java() {
  return (
    <div>
       <Java1/> 
       <Java2/>
       <Java5/>
       <Java3/>
       <JavaInfo/>
        <Internship/>
       <Java4/>
       <JavaOverview/>
       {/* <Java6/> */}
      <CareerOptions/>
      <JavaCertificate/>
       <MoreCourses/>
       <Testimonials/>
       <Companie/>
       <JavaFAQ/>
       <Talk_to_Our_Advisor />
       
    </div>
  )
}

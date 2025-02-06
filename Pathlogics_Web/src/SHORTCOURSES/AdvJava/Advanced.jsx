import React from 'react'
import ShortTermAdv from './ShortTermAdv'
import Journey from './AdvJavaJourney'
import ProgramO from './AdvJavaProgramO'
import Master from './MasterAdvJava'
import Curriculum from './AdvJavaCurriculum'
import AdvModules from './AdvModules'
import MoreCourses from '../Salesforce Developer/MoreCourses'
import Testimonials from '../../Home/Testimonials/Testimonials'
import Companie from '../../Fullstack/Companies/Companie'


export default function Advanced() {
  return (
    <div>
       <ShortTermAdv/>
       <Journey/>
       <ProgramO/>
       <Master/>
       <Curriculum/>
       <AdvModules/>
       <MoreCourses/>
       <Testimonials/>
       <Companie/>
    </div>
  )
}

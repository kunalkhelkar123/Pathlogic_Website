import React from 'react'
import ShortTermAngular from '../Angular/ShortTermAngular'
import ShortTermDotnetangular from './ShortTermDnetangular'
import Dotangjourney from './Dotangjourney'
import DotNetWithAngProgramOverview from './DotNetWithAngProgramOverview'
import MasterDnAng from './MasterDnAng'
import Dnangcurriculum from './Dnangcurriculum'
import MoreCourses from '../Salesforce Developer/MoreCourses'
import Testimonials from '../../Home/Testimonials/Testimonials'
import Companie from '../../Fullstack/Companies/Companie'

function DotnetAngularCourse() {
  return (
    <div>
      <ShortTermDotnetangular/>
      <Dotangjourney/>
      <DotNetWithAngProgramOverview/>
      <MasterDnAng/>
      <Dnangcurriculum/>
      <MoreCourses/>
      <Testimonials/>
      <Companie/>
    </div>
  )
}

export default DotnetAngularCourse
import React from 'react'
import ShortTermAngular from './ShortTermAngular'
import AngularJourney from './AngularJourney'
import AngularProgramO from './AngularProgramO';
import MasterAngular from './MasterAngular';
import AngularCurriculum from './AngularCurriculum';
import AngularModules from './AngularModules';
import MoreCourses from '../Salesforce Developer/MoreCourses';
import Testimonials from '../../Home/Testimonials/Testimonials';
import Companie from '../../Fullstack/Companies/Companie';

function AngularCourse() {
  return (
    <div>

        <ShortTermAngular/>
        <AngularJourney/>
        <AngularProgramO/>
        <MasterAngular/>
        <AngularCurriculum/>
        <AngularModules/>
        <MoreCourses/>
        <Testimonials/>
        <Companie/>
    </div>
  )
}

export default AngularCourse;
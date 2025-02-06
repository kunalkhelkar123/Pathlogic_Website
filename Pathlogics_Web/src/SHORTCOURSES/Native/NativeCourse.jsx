import React from 'react'
import NativeShortTerm from './NativeShortTerm'
import NativeJourney from './NativeJourney';
import NativeProgramO from './NativeProgramO';
import NativeCurriculum from './NativeCurriculum';
import NativeCoreModules from './NativeCourseModules';
import MoreCourses from '../Salesforce Developer/MoreCourses';
import Testimonials from '../../Home/Testimonials/Testimonials';
import Companie from '../../Fullstack/Companies/Companie';

function NativeCourse() {
  return (
    <div>
    <NativeShortTerm/>
    <NativeJourney/>
    <NativeProgramO/>
    <NativeCurriculum/>
    <NativeCoreModules/>
    <MoreCourses/>
    <Testimonials/>
    <Companie/>
    </div>
  )
}

export default NativeCourse;
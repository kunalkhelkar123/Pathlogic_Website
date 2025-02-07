import React from 'react'
import ShortTermReact from './ShortTermReact';
import ReactJourney from './ReactJourney';
import ReactProgramO from './ReactProgramO';
import MasterReactJs from './MasterReactJs';
import ReactCurriculum from './ReactCurriculum';
import MoreCourses from '../Salesforce Developer/MoreCourses';
import Testimonials from '../../Home/Testimonials/Testimonials';
import Companie from '../../Fullstack/Companies/Companie';
import ReactCourseModules from './ReactCourseModules';

function ReactCourse() {
  return (
    <div>
    
        <ShortTermReact/>
        <ReactJourney/>
        <ReactProgramO/>
        <MasterReactJs/>
        <ReactCurriculum/>
        <ReactCourseModules/> 
        <MoreCourses/>
        <Testimonials/>
        <Companie/>
        </div>
  )
}

export default ReactCourse;
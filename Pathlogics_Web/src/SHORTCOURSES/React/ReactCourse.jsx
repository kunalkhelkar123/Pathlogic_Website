import React from 'react'
import ShortTermReact from './ShortTermReact';
import ReactJourney from './ReactJourney';
import ReactProgramO from './ReactProgramO';
import MasterReactJs from './MasterReactJs';
import ReactCurriculum from './ReactCurriculum';
// import MoreCourses from '../SalesforceDeveloper/MoreCourses';
import Testimonials from '../../Home/Testimonials/Testimonials';
import Companie from '../../Fullstack/Companies/Companie';
import ReactCourseModules from './ReactCourseModules';
import Reactfaq from './ReactFaq';
import Radvisor from './Radvisor';
import CareerOptionsPage from './CareerOptionsPage';
import Reacteight from './Reacteight';
import ReactDrop from './ReactDrop';
import ReactIpt from '../../LongtermCourses/FullStackAI/ReactIpt';
import ReactIntro from './ReactIntro';
import ReactTools from './ReactTools';
import ReactFeatures from './ReactFeatures';
import ReactCerticate from './ReactCerticate';
import ReactMenu from './ReactMenu';

function ReactCourse() {
  return (
    <div>
    
        <ShortTermReact/>
        <ReactJourney/>
        <ReactFeatures/>
        <ReactIntro/>
           <ReactTools/>
          <ReactIpt/>
         <ReactDrop/>
        <Reacteight/>
         <CareerOptionsPage/>
       <ReactCerticate/>
         {/* <MoreCourses/> */}
         <ReactMenu/>
        <Testimonials/>
        <Companie/>
         <Reactfaq/>
         <Radvisor/>
        </div>
  )
}

export default ReactCourse;
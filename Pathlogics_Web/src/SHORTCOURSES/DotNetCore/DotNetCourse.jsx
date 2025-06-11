import React from 'react'
import ShortTermDotNet from './ShortTermDotNet'
import Journey from '../AdvJava/AdvJavaJourney';
import DotNetJourney from './Dotnetjourney';
import DotneProgramo from './DotnetProgramo';
import DotnetProgramo from './DotnetProgramo';
import DotNetCurr from './DotnetCurr';
import MasterDnet from './MasterDnet';
import Dotnetcoursem from './Dotnetcoursem';
// import MoreCourses from '../Salesforce Developer/MoreCourses';
import Testimonials from '../../Home/Testimonials/Testimonials';
import Companie from '../../Fullstack/Companies/Companie';

function DotNetCourse() {
  return (
    <div>
        <ShortTermDotNet/>
        <DotNetJourney/>
        <DotnetProgramo/>
        <MasterDnet/>
        <DotNetCurr/>
        <Dotnetcoursem/>
        {/* <MoreCourses/> */}
        <Testimonials/>
       <Companie/>
    </div>
  )
}

export default DotNetCourse;
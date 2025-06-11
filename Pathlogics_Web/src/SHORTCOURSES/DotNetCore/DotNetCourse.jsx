import React from 'react'
import ShortTermDotNet from './ShortTermDotNet'
import Journey from '../AdvJava/AdvJavaJourney';
import DotNetJourney from './Dotnetjourney';
import DotneProgramo from './DotnetProgramo';
import DotnetProgramo from './DotnetProgramo';
import DotNetCurr from './DotnetCurr';
import MasterDnet from './MasterDnet';
import Dotnetcoursem from './Dotnetcoursem';
import MoreCourses from '../Salesforce Developer/MoreCourses';
import Testimonials from '../../Home/Testimonials/Testimonials';
import Companie from '../../Fullstack/Companies/Companie';
import DotModules from './DotModules';
import Dotcurr from './Dotcurr';
import Dotcareer from './Dotcareer';
import Dotnetcertificate from './Dotnetcertificate';
import DotnetFAQ from './DotnetFAQ';
import Talk_to_Our_Advisor from "../../../src/LongtermCourses/FullStackWebDevelopement/Talk_to_Our_Advisor"

function DotNetCourse() {
  return (
    <div>
        <ShortTermDotNet/>
        <DotNetJourney/>
        <DotnetProgramo/>
        <MasterDnet/>
        <DotNetCurr/>
        <Dotnetcoursem/>
        <DotModules/>
        <Dotcurr/>
        <Dotcareer/>
        <Dotnetcertificate/>
        <MoreCourses/>
        <Testimonials/>
       <Companie/>
       <DotnetFAQ/>
        <Talk_to_Our_Advisor />
    </div>
  )
}

export default DotNetCourse;
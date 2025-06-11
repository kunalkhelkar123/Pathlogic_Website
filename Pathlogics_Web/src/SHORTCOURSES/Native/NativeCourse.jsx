import React from 'react'
import NativeShortTerm from './NativeShortTerm'
import NativeJourney from './NativeJourney';
import NativeProgramO from './NativeProgramO';
import NativeCurriculum from './NativeCurriculum';
import NativeCoreModules from './NativeCourseModules';
import MoreCourses from '../Salesforce Developer/MoreCourses';
import Testimonials from '../../Home/Testimonials/Testimonials';
import Companie from '../../Fullstack/Companies/Companie';
import Masternative from './MasterNative';
import MasterNative from './MasterNative';
import NativeInfo from './NativeInfo';
import NativeOverview from './NativeOverview';
import Nativecareer from './Nativecareer';
import NativeCertificate from './NativeCertificate';
import NativeFAQ from './NativeFAQ';
import Talk_to_Our_Advisor from "../../../src/LongtermCourses/FullStackWebDevelopement/Talk_to_Our_Advisor"

function NativeCourse() {
  return (
    <div>
    <NativeShortTerm/>
    <NativeJourney/>
    <NativeProgramO/>
    <MasterNative/>
    <NativeCurriculum/>
    <NativeCoreModules/>
    <NativeOverview/>
    <NativeInfo/>
    <Nativecareer/>
    <NativeCertificate/>
    <MoreCourses/>
    <Testimonials/>
    <Companie/>
    <NativeFAQ/>
     <Talk_to_Our_Advisor />
     
    </div>
  )
}

export default NativeCourse;
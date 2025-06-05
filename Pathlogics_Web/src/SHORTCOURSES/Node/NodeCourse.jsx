import React from 'react'

import NodeJourney from './NodeJourney'
// import NodeJsProgramO from './NodeProgramO'
import MasterNode from './NodeJsCoursePage'
import NodeCurriculum from './NodeCurriculum'
import ModulesNode from './ModulesNode'
import MoreCourses from '../Salesforce Developer/MoreCourses'
import Testimonials from '../../Home/Testimonials/Testimonials'
import Companie from '../../Fullstack/Companies/Companie'
import NodeProgramO from './NodeProgramO'
import NodeJsCoursePage from "./NodeJsCoursePage";
import NodeFeatures from './NodeFeature'
import NodeIntro from './NodeIntro'
import NodeTools from './NodeTools'
import NodetIpt from './NodetIpt'
import NodeDrop from './NodeDrop'
import Nodeeight from './Nodeeight'
import NodeOptionsPage from './NodeOptionsPage'
import NodeCertificate from './NodeCertificate'
import NodeFaq from './NodeFaq'
import Nodeadvisor from './Nodeadvisor'


function NodeCourse() {
  return (
    <div>
   <NodeJsCoursePage/>
   <NodeJourney/>
   <NodeFeatures/>
   <NodeIntro/>
   <NodeTools/>
   <NodetIpt/>
   <NodeDrop/>
   <Nodeeight/>
   <NodeOptionsPage/>
   <NodeCertificate/>  
        <MoreCourses/>
        <Testimonials/>
        <Companie/>
        <NodeFaq/>
        <Nodeadvisor/>
    </div>
  )
}

export default NodeCourse
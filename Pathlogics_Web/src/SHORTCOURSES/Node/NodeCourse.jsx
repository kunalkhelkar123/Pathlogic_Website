import React from 'react'
import ShortTermNode from './ShortTermNode'
import NodeJourney from './NodeJourney'
// import NodeJsProgramO from './NodeProgramO'
import MasterNode from './MasterNode'
import NodeCurriculum from './NodeCurriculum'
import ModulesNode from './ModulesNode'
import MoreCourses from '../Salesforce Developer/MoreCourses'
import Testimonials from '../../Home/Testimonials/Testimonials'
import Companie from '../../Fullstack/Companies/Companie'
import NodeProgramO from './NodeProgramO'

function NodeCourse() {
  return (
    <div>
        <ShortTermNode/>
        <NodeJourney/>
     <NodeProgramO/>
        <MasterNode/>
        <NodeCurriculum/>
        <ModulesNode/>
        <MoreCourses/>
        <Testimonials/>
        <Companie/>
    </div>
  )
}

export default NodeCourse
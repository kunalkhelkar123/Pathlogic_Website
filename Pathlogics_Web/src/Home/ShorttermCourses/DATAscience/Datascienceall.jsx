import React from 'react'
import DataSciencePlacement from './DataSciencePlacement'
import Datasciencejourny from './Datasciencejourny'
import DataScienceStack from './Datasciencestack'
import DataSciencePython from './DataSciencePython'
import DataScienceModules from './DataScienceModules'
import Testimonials from '../../Testimonials/Testimonials'
import Company from '../DigitalMarketing/Company'
import DataOverview from './DataOverview'
import DatascienceInternship from './DatascienceInternship'
import Dataover from './Dataover'
import Datacareer from './Datacareer'
import Datasciencecertificate from './Datasciencecertificate'
import DataFAQ from './DataFAQ'
import Talk_to_Our_Advisor from "../../../../src/LongtermCourses/FullStackWebDevelopement/Talk_to_Our_Advisor"
function Datascienceall() {
  return (
    <>
    <DataSciencePlacement/>
    <Datasciencejourny/>
    <DataOverview/>
    <DataScienceStack/>
    <DataSciencePython/>
    <DatascienceInternship/>
    <DataScienceModules/>
    <Dataover/>
    <Datacareer/>
    <Datasciencecertificate/>
    <Testimonials/>
    <Company/>
    <DataFAQ/>
    <Talk_to_Our_Advisor/>

    </>
  )
}

export default Datascienceall
import React from 'react'

import SoftwareTestingJourney from './softweretestingjourny'
import SoftwareStack from './SoftwareStack'
import SoftwareOverview from './SoftwareOverview'
import SoftwareTestinglogo from './softweretestinglogo'

import SoftwareTestingModules from './SoftwareTestingModules'
import Courses from './Softwerecourse'
import Testimonials from '../../Testimonials/Testimonials'
import Company from '../DigitalMarketing/Company'
// import SoftwareTestingFirstPage from './Softpage'
import Softpage from './Softpage'
import SoftInternship from './Softinternship'
import SoftOverview from './Softoverview'
import Softcareer from "./Softcareer"
import Softcertificate from "./Softcertificate"
import SoftFAQ from "./SoftFAQ"
import Talk_to_Our_Advisor from "../../../../src/LongtermCourses/FullStackWebDevelopement/Talk_to_Our_Advisor"
function Softallcomponent() {
  return (
    <>
    <Softpage/>
    <SoftwareTestingJourney/>
      <SoftwareOverview/>
    <SoftwareStack/>
    <SoftwareTestinglogo/>
    <SoftInternship/>
    <SoftOverview/>
    <SoftwareTestingModules/>
    <Softcareer/>
    <Softcertificate/>
    <Courses/>
    <Testimonials/>
<Company/>
<SoftFAQ/>
<Talk_to_Our_Advisor/>
    </>
  )
}

export default Softallcomponent ;
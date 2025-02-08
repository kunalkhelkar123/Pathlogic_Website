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

function Softallcomponent() {
  return (
    <>
    <Softpage/>
    <SoftwareTestingJourney/>
      <SoftwareOverview/>
    <SoftwareStack/>
    <SoftwareTestinglogo/>
    <SoftwareTestingModules/>
    <Courses/>
    <Testimonials/>
<Company/>
    </>
  )
}

export default Softallcomponent
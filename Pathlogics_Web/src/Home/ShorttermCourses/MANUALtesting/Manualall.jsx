import React from 'react'
import Manualpage from './Manualpage'
import ManualOverview from './ManualOverview'
import Manualstack from './Manualstack'
import ManualTesting from './ManualTesting'
import ManualModules from './ManualModules'
import Testimonials from '../DigitalMarketing/Testimonials'
import Company from '../DigitalMarketing/Company'
import ManualFeatures from './ManualFeatures'
import ManIpt from './ManIpt'
import ManualDrop from './ManualDrop'
import Manualtest from './Manualtest'
import ManualOver from './ManualOver'
import ManualOptions from './ManualOptions'
import ManualCertificate from './ManualCertificate'
import ManualCourses from './ManualCourses'
import ManualFaq from './ManualFaq'
import Manualadvisor from './Manualadvisor'
import ManualTestingInfo from './ManualTestingInfo'


function Manualall() {
  return (
<>
<Manualpage/>
<Manualtest/>
<ManualFeatures/>
<ManualTestingInfo/>
<ManIpt/>
<ManualDrop/>
<ManualOver/>
<ManualOptions/>
<ManualCertificate/>
{/* 
<ManualOverview/>
<Manualstack/> */}
<ManualCourses/>
<Testimonials/>
<Company/>
<ManualFaq/>
<Manualadvisor/>
</>
  )
}

export default Manualall
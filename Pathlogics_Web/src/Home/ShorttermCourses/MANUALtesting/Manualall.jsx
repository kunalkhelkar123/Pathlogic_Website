import React from 'react'
import Manualpage from './Manualpage'
import ManualOverview from './ManualOverview'
import Manualstack from './Manualstack'
import ManualTesting from './ManualTesting'
import ManualModules from './ManualModules'
import Testimonials from '../DigitalMarketing/Testimonials'
import Company from '../DigitalMarketing/Company'
import ManualFeatures from './ManualFeatures'
import ManualIntro from './ManualIntro'
import ManIpt from './ManIpt'
import ManualDrop from './ManualDrop'
import Manualtest from './Manualtest'
import ManualOver from './ManualOver'
import ManualOptions from './ManualOptions'
import ManualCertificate from './ManualCertificate'
import ManualCourses from './ManualCourses'
import ManualFaq from './ManualFaq'
import Manualadvisor from './Manualadvisor'


function Manualall() {
  return (
<>
<Manualpage/>
<Manualtest/>
<ManualFeatures/>
<ManualIntro/>
<ManIpt/>
<ManualDrop/>
<ManualOver/>
<ManualOptions/>
<ManualCertificate/>
{/* 
<ManualOverview/>
<Manualstack/> */}
{/* <ManualTesting/> */}
{/* <ManualModules/> */}
<ManualCourses/>
<Testimonials/>
<Company/>
<ManualFaq/>
<Manualadvisor/>
</>
  )
}

export default Manualall
import React from 'react'

import JavaOverview from './JavaOverview'
import QuickViewJavaP from './QuckiViewJavaP'
import CurriculumPlace from './CurriculamPlaceJava'
import JourneyFullstack from './JourneyFullstack'
import JavaPlacementModules from './JavaPlacementmodules'
import FullStackJava from './FullStackJava'
import Testimonials from '../../../Home/Testimonials/Testimonials'
import Companie from '../../Companies/Companie'
import AllViewMore from '../../../AllViewMore'


function Java() {
  return (
    <div>
      <FullStackJava/>
      <JourneyFullstack/>
      <QuickViewJavaP/>
      <JavaOverview/>
      <CurriculumPlace/>
      
      <JavaPlacementModules/>
      <AllViewMore/>
      <Testimonials/>
      <Companie/>

      
      {/* <SHepu2/> */}
      
    </div>
  )
}

export default Java

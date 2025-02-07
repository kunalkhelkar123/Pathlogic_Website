import React from 'react'
import AllViewMore from '../../../AllViewMore'
import Testimonials from '../../../Home/Testimonials/Testimonials'
import Companie from '../../Companies/Companie'
import DigitalMBanner from './DigitalMbanner'
import DigitalMJourney from './DigitalMJourney'
import DigitalMOverview from './DigitalMOverView'
import DigitalMQuicklook from './DigitalMQuicklook'
import DigitalMCurriculum from './DigitalMCurriculam'
import DigitalMModules from './DigitalMModules'

function MainDigitalMarketing() {
  return (
    <div>
        <DigitalMBanner/>
        <DigitalMJourney/>
        <DigitalMOverview/>
        <DigitalMQuicklook/>
        <DigitalMCurriculum/>
        <DigitalMModules/>
        <AllViewMore/>
        <Testimonials/>
        <Companie/>
      
    </div>
  )
}

export default MainDigitalMarketing

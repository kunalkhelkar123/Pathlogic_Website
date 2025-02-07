import React from 'react'
import AllViewMore from '../../../AllViewMore'
import Testimonials from '../../../Home/Testimonials/Testimonials'
import Companies from '../../../Home/Companies/Companies'
import TestingOverview from './TestingOverview'
import Companie from '../../Companies/Companie'
import TestingBanner from './TestingBanner'
import TestingJourney from './TestingJourney'
import TestingQuicklook from './TestingQuicklook'
import TestingCurriculam from './TestingCurriculam'
import TestingModules from './TestingModules'

function MainTesting() {
  return (
    <div>
      <TestingBanner/>
      <TestingJourney/>
      <TestingOverview/>
      <TestingQuicklook/>
      <TestingCurriculam/>
      <TestingModules/>
      <AllViewMore/>
      <Testimonials/>
      <Companie/>
    </div>
  )
}

export default MainTesting

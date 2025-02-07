import React from 'react'
import FullWebBanner from './FullWEbBanner'
import FullStackWeb from './FullstackWeb'
import AllViewMore from '../../../AllViewMore'
import Testimonials from '../../../Home/Testimonials/Testimonials'
import Companie from '../../Companies/Companie'
import WebOverView from './WebOverView'
import WebCurriculum from './WebCurriculam'
import WebModules from './WebModules'
import JourneyWeb from './journeyWeb'
// import Esam from './Esam'

function FullstackWebPlacement() {
  return (
    <div>
      <FullWebBanner/>
      <JourneyWeb/>
      <FullStackWeb/>
      <WebOverView/>
      <WebCurriculum/>
      <WebModules/>
      <AllViewMore/>
      <Testimonials/>
      <Companie/>

      {/* <Esam/> */}
    </div>
  )
}

export default FullstackWebPlacement

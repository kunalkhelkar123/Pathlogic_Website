import React from 'react'
import MoreCourses from '../Salesforce Developer/MoreCourses'
import Testimonials from '../../Home/Testimonials/Testimonials'
import Companie from '../../Fullstack/Companies/Companie'
import Dotnetone from './Dotnetone.jsx'
import DotnetFeatures from './DotnetFeature.jsx'
import DotNetIntro from './DotNetIntro.jsx'
import DotNetJourney from './DotNetJourney.jsx'
import DotnetTools from './DotnetTools.jsx'
import Dotnetipt from './Dotnetipt.jsx'
import DotnetDrop from './DotnetDrop.jsx'
import DotNetOverview from './DotNetOverview.jsx'
import DotNetAngularRoles from './dotNetAngularRoles.jsx'
import DotnetCerticate from './DotnetCerticate.jsx'
import DotnetFaq from './DotnetFaq.jsx'
import Dotnetadvisor from './Dotnetadvisor'

function DotnetAngularCourse() {
  return (
    <div>
      <Dotnetone/>
      <DotNetJourney/>
      <DotnetFeatures/>
      <DotNetIntro/>
      <DotnetTools/>
      <Dotnetipt/>
      <DotnetDrop/>
      <DotNetOverview/>
    <DotNetAngularRoles/>
    <DotnetCerticate/>
      <MoreCourses/>
      <Testimonials/>
      <Companie/>
      <DotnetFaq/>
      <Dotnetadvisor/>
    </div>
  )
}

export default DotnetAngularCourse
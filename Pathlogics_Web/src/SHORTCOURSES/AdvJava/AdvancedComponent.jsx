import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import AdvanceJavaBanner from './AdvanceJavaBanner'
import AdvancedJavaCourseSection from './AdvancedJavaCourseSection'
import AdvanceJavaFeatureCards from './AdvanceJavaFeatureCards'
import AdvancedJavaOverview from './AdvancedJavaOverview'
import AdvanceJavaToolsSection from './AdvanceJavaToolsSection'
import PaidInternship from './PaidInternship'
import AdvJavaCurriculum from "./AdvJavaCurriculum"
import AdvJavaOverview from './AdvJavaOveriew'
import AdvCarrerOptions from './AdvCarrerOptions'
import AdvJavaCertifications from './AdvJavaCertifications'


import MoreCourses from '../Salesforce Developer/MoreCourses'
import Testimonials from '../../Home/Testimonials/Testimonials'
import Companie from '../../Fullstack/Companies/Companie'
import AdvJavaFAQ from './AdvJavaFAQ'
import TalkToAdvisor from './TalkToAdvisor'


export default function AdvancedComponent() {
  return (
    <div>
      <HelmetProvider>
                  <Helmet>
                      <title> Advanced Java Course in Pune With Certification</title>
                      <meta name="description" content="Pathlogics offers the best basic to advanced Java course in pune with certification. Designed for students and professionals looking to specialize.Enroll Now!" />
                  </Helmet>
       <AdvanceJavaBanner/>
       <AdvancedJavaCourseSection/>
       <AdvanceJavaFeatureCards/>
       <AdvancedJavaOverview/>
       <AdvanceJavaToolsSection/>
       <PaidInternship/>
       <AdvJavaCurriculum/>
       <AdvJavaOverview/>
       <AdvCarrerOptions/>
       <AdvJavaCertifications/>
        <MoreCourses/>
       <Testimonials/>
       <Companie/>
       <AdvJavaFAQ/>
       <TalkToAdvisor/>
       </HelmetProvider>
    </div>
  )
}

import React from 'react'
//import FirstPage from './Seleniumpage'
import SeleniumJourny from './Seleniumjourny'
import SeleniumOverview from './Seleniumoverwive'
import SeleniumJavaCourse from './Seleniumjavacourse'
import SeleniumStack from './SeleniumStack'
import SeleniumJavaModules from './SeleniumJavaModule'
import Courses from './Seleniumcourse'
import Testimonials from '../../Testimonials/Testimonials'
import Company from '../DigitalMarketing/Company'
import Seleniumpage from './Seleniumpage'
//import Seleniumpage from './Seleniumpage'
import SeleniumInternship from './SeleniumInternship'
import SeleniumOver from './Seleniumover'
import SeleniumCareer from './SeleniumCareer'
import SeleniumCertificate from './SeleniumCertificate'
import SeleniumFAQ from './SeleniumFAQ';
import Talk_to_Our_Advisor from "../../../../src/LongtermCourses/FullStackWebDevelopement/Talk_to_Our_Advisor"
function Seleniumjavaall() {
  return (
    <>
    {/* <FirstPage/> */}
    <Seleniumpage/>
    <SeleniumJourny/>
    <SeleniumOverview/>
    <SeleniumStack/>
    <SeleniumJavaCourse/>
    <SeleniumInternship/>
    <SeleniumJavaModules/>
      <SeleniumOver/>
      <SeleniumCareer/>
      <SeleniumCertificate/>
    <Courses/>
    <Testimonials/>
    <Company/>
    <SeleniumFAQ/>
    <Talk_to_Our_Advisor/>

    </>
  )
}

export default Seleniumjavaall
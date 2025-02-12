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
function Seleniumjavaall() {
  return (
    <>
    {/* <FirstPage/> */}
    <Seleniumpage/>
    <SeleniumJourny/>
    <SeleniumOverview/>
    <SeleniumStack/>
    <SeleniumJavaCourse/>
    <SeleniumJavaModules/>
    <Courses/>
    <Testimonials/>
    <Company/>

    </>
  )
}

export default Seleniumjavaall
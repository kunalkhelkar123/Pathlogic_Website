import React from 'react'
import FullStackPlacement from './FullStackPlacement'
import Fullstackjourny from './Fullstackjourny' 
import FullStackJava from './FullStackJava'
import FullStackJavalogo from './FullStackJavalogo'
import FullStackModules from './FullStackModules'
import Testimonials from '../DigitalMarketing/Testimonials'
import Company from '../DigitalMarketing/Company';
import FullStackOverview from './FullStackOverview';

function Fullstackall() {
  return (
  <>
  <FullStackPlacement/>
  <Fullstackjourny/>
  <FullStackOverview/>
  <FullStackJava/>
  <FullStackJavalogo/>
  <FullStackModules/>
  <Testimonials/>
  <Company/>
  </>
  )
}

export default Fullstackall;
import React from 'react'
import Placement from './place/Placement'
// import Opportunities from "./placements/Opportunities/Opportunities";
import Opportunities from './Opportunities/Opportunities';

import Record from "./Placementrecord/Record";
import Offices from "./company/Offices";
import Certaria from "./Cretaria";
import Student from "./ourstudent/Student";
import Testimonials from "../Home/Testimonials/Testimonials";

function Jobplacment() {
  return (
    <div>
        <Placement/>
      <Opportunities/>
      <Record/>
      <Student/>
      <Offices/>
      <Certaria/>
      <Testimonials/>
      {/* <Footer/>  */}
    </div>
  )
}

export default Jobplacment
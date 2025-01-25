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




// <img
// src={image}
// alt="Slide 1"
// className="mx-auto w-full h-screen object-cover md:h-auto" // Full height for mobile
// />
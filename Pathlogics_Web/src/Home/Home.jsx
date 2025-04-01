import React, { useEffect } from 'react'
// import Pathinstitute from './@pathinstitute/Pathinstitute'
import Banner from './Banner/Banner'
import Blogs from './Blogs/Blogs'
import Companies from './Companies/Companies'
import Courses_offer from './Courses_offer/Courses_offer'
import Header from './Header/Header'
import Workweoffers from './Footer/Workweoffers'
import Sticky from './Footer/Sticky/Sticky'
import Testimonials from './Testimonials/Testimonials'
import Questions from './Questions/Questions'
import Loginform from './Loginform/Loginform'
import Footer from './Footer/Footer'
import Pop from './pop/Pop'
import PlacementAssistance from "./PlacementAssistance/PlacementAssistance"
//import Intership from './Longtermgoal/Internship'

import { Helmet } from "react-helmet";
function Home() {
  useEffect(() => {
    <Pop />
  }, [])
  return (
    <div>
      <Helmet>
        <title>  Best IT Training Institute in Pune | Software Courses with Placement.</title>
        <meta name="description" content=" Join the best IT training institute in Pune. Enroll in software courses with 100% placement assistance. Kickstart your IT career– Apply Today!" />
      </Helmet>
      {/* <Pathinstitute/> */}
      {/* <Pop/> */}
      <Banner />
      {/* <Intership/> */}
      <Blogs />
      <Sticky />
      <Companies />
      <Courses_offer />

      {/* <Workweoffers/> */}
      <Testimonials />   <PlacementAssistance /> <Header />

      <Questions />
      <Loginform />
      {/* <OurBLogs/> */}

      {/* <Footer/> */}

    </div>
  )
}

export default Home
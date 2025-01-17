import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import 'swiper/css';
import Pathinstitute from "./Home/@pathinstitute/Pathinstitute";
import Banner from "./Home/Banner/Banner";
import Blogs from "./Home/Blogs/Blogs";
import Companies from "./Home/Companies/Companies";
import Courses_offer from "./Home/Courses_offer/Courses_offer";
import Header from "./Home/Header/Header";
import Workweoffers from "./Home/Footer/Workweoffers";
import Sticky from "./Home/Footer/Sticky/Sticky";
import Testimonials from "./Home/Testimonials/Testimonials";
import Questions from "./Home/Questions/Questions";
import Loginform from "./Home/Loginform/Loginform";
import Footer from "./Home/Footer/Footer";
import Start from "./Fullstack/Navbar/Start";
import Promotion from "./Fullstack/Imagesdev/Promotion";
import Mernstack from "./Fullstack/mernstack/Mernstack";
import Program from "./Fullstack/programveiw/Program";
import Roadmap from "./Fullstack/roadmap/Roadmap";
import Accordian from "./Fullstack/Accordian/Accordian";
import Companie from "./Fullstack/Companies/Companie";
import Home from "./Home/Home";
import Fullstack from "./Fullstack/Fullstack";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Loader";
import About from "./Fullstack/About";
// import Placement from "./assets/placement/placement";
// import Placement from "./assets/placement/placement";
import { useLocation } from "react-router-dom";
import Placement from "./placements/place/Placement";
import Opportunities from "./placements/Opportunities/Opportunities";
import Record from "./placements/Placementrecord/Record";
import Offices from "./placements/company/Offices";
import Certaria from "./placements/Cretaria";
import Student from "./placements/ourstudent/Student";
import Logo from "./Corparate/Logo";
import HiringForm from "./Corparate/HiringForm";
import Jobplacment from "./placements/Jobplacment";
import Trains from "./Traninus/Trains";
import Skills from "./Traninus/Skills";
import More from "./Traninus/More";
import Again from "./Corparate/Again";
import Details from "./ABOUT/Details"
import Data from "./ABOUT/Data"
import Aboutus from "./ABOUT/Aboutus";
import Mission from "./ABOUT/Mission";
import All from "./ABOUT/All";
import Workspace from "./WORKSPACE/Workspace";
import Javadeveloper from "./SHORTCOURSES/Javadeveloper";
import Courseoverveiw from "./SHORTCOURSES/Courseoverveiw";
import Modules from "./SHORTCOURSES/Modules";
// import Question from "./SHORTCOURSES/Question";
import Answer from "./SHORTCOURSES/Answer";
import Short from "./SHORTCOURSES/Short";
import Hero from "./SHORTCOURSES/Awsdevops/Hero";
import Overview from "./SHORTCOURSES/Awsdevops/Overveiw";
import Course from "./SHORTCOURSES/Awsdevops/Course";
import Aws from "./SHORTCOURSES/Awsdevops/Aws";
import Softhero from "./SHORTCOURSES/Software/Softhero";
import StudentRegistration from "./StudentRegistration/Registration";
import StudentLogin from "./StudentLogin/StudentLogin";
import StudentDashboard from "./StudentDashboard/StudentDashboard";
import Scrolltop from "./Scrolltop";


import Testing from "./SHORTCOURSES/Software/Testing";
import QuickEnquiry from "./Quick Enquiry/QuickEnquiry";
import Quick from "./Quick Enquiry/Quick";

// import { useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Show loader on route change
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after a delay
    }, 1000); // Simulate loading time (adjust as necessary)

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [location]); // This will run every time the route changes
  { loading && <Loader /> } {/* Show loader if loading state is true */ }



  return (
    <>
       <Scrolltop />
      <Pathinstitute />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/placement" element={<Jobplacment />} />
        <Route path="/more" element={<More />} />
        <Route path="/again" element={<Again />} />
        <Route path="/All" element={<All />} />
        <Route path="/Aboutus" element={<All />} />

        <Route path="/Workspace" element={<Workspace />} />
        <Route path="/Short" element={<Short />} />
        <Route path="/Aws" element={<Aws />} />
        <Route path="/Testing" element={<Testing />} />
        <Route path="/QuickEnquiry" element={<Quick />} />
        <Route path="/studentregistration" element={<StudentRegistration />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        {/* <Route path="/Loginform" element={<Loginform />} /> */}




      </Routes>
      <Footer /> 
       {/* <Softhero/>
        <Softover/>
        <Aboutus/> */}
    

    </>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import 'swiper/css';
// import Pathinstitute from "./Home/@pathinstitute/Pathinstitute";
// import Banner from "./Home/Banner/Banner";
// import Blogs from "./Home/Blogs/Blogs";
// import Companies from "./Home/Companies/Companies";
// import Courses_offer from "./Home/Courses_offer/Courses_offer";
// import Header from "./Home/Header/Header";
// import Workweoffers from "./Home/Footer/Workweoffers";
// import Sticky from "./Home/Footer/Sticky/Sticky";
// import Testimonials from "./Home/Testimonials/Testimonials";
// import Questions from "./Home/Questions/Questions";
// import Loginform from "./Home/Loginform/Loginform";
// import Footer from "./Home/Footer/Footer";
// import Start from "./Fullstack/Navbar/Start";
// import Promotion from "./Fullstack/Imagesdev/Promotion";
// import Mernstack from "./Fullstack/mernstack/Mernstack";
// import Program from "./Fullstack/programveiw/Program";
// import Roadmap from "./Fullstack/roadmap/Roadmap";
// import Accordian from "./Fullstack/Accordian/Accordian";
// import Companie from "./Fullstack/Companies/Companie";
// import Home from "./Home/Home";
// import Fullstack from "./Fullstack/Fullstack";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Loader from "./Loader";
// import About from "./Fullstack/About";
// // import Placement from "./assets/placement/placement";
// // import Placement from "./assets/placement/placement";
// import { useLocation } from "react-router-dom";
// import Placement from "./placements/place/Placement";
// import Opportunities from "./placements/Opportunities/Opportunities";
// import Record from "./placements/Placementrecord/Record";
// import Offices from "./placements/company/Offices";
// import Certaria from "./placements/Cretaria";
// import Student from "./placements/ourstudent/Student";
// import Logo from "./Corparate/Logo";
// import HiringForm from "./Corparate/HiringForm";
// import Jobplacment from "./placements/Jobplacment";
// import Trains from "./Traninus/Trains";
// import Skills from "./Traninus/Skills";
// import More from "./Traninus/More";
// import Again from "./Corparate/Again";
// import Details from "./ABOUT/Details"
// import Data from "./ABOUT/Data"
// import Aboutus from "./ABOUT/Aboutus";
// import Mission from "./ABOUT/Mission";
// import All from "./ABOUT/All";
// import Workspace from "./WORKSPACE/Workspace";
// import Javadeveloper from "./SHORTCOURSES/Javadeveloper";
// import Courseoverveiw from "./SHORTCOURSES/Courseoverveiw";
// import Modules from "./SHORTCOURSES/Modules";
// // import Question from "./SHORTCOURSES/Question";
// import Answer from "./SHORTCOURSES/Answer";
// import Short from "./SHORTCOURSES/Short";
// import Hero from "./SHORTCOURSES/Awsdevops/Hero";
// import Overview from "./SHORTCOURSES/Awsdevops/Overveiw";
// import Course from "./SHORTCOURSES/Awsdevops/Course";
// import Aws from "./SHORTCOURSES/Awsdevops/Aws";
// import Softhero from "./SHORTCOURSES/Software/Softhero";
// import StudentRegistration from "./StudentRegistration/Registration";
// import StudentLogin from "./Login/StudentLogin/StudentLogin";
// import StudentDashboard from "./StudentDashboard/StudentDashboard";
// import AdminDashboard from "./Admin/AdminDashboard";
// import Scrolltop from "./Scrolltop";
// import Pop from "../src/Home/pop/Pop"
// import AdminLogin from "./AdminLogin/AdminLogin";


// import Testing from "./SHORTCOURSES/Software/Testing";
// import QuickEnquiry from "./Quick Enquiry/QuickEnquiry";
// import Knowmore from "./Home/Know More/AutoStar/Knowmore";
// import AdminLogin from "./Login/StudentLogin/AdminLogin";
// import Studentinfo from "./Admin/Studentinfo";
// import Test from "./Admin/Test/Test";
// import Courses from "./Admin/Test/Courses";
// import StudentProfileForm from "./Admin/StudentProfileForm";


// import Inter from "./Home/Longtermgoal/Inter";
// // import Intership from "./Home/Longtermgoal/Internship";

// import Salesforce from "../src/SHORTCOURSES/Salesforce Developer/Salesforce";
// import SaForce from "./SHORTCOURSES/Salesforce Developer/SaForce";


// import Quick from "./Quick Enquiry/Quick";



// // import { useEffect } from "react";
// function App() {
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setLoading(true); // Show loader on route change
//     const timer = setTimeout(() => {
//       setLoading(false); // Hide loader after a delay
//     }, 1000); // Simulate loading time (adjust as necessary)

//     // Clean up the timer when the component unmounts
//     return () => clearTimeout(timer);
//   }, [location]); // This will run every time the route changes
//   { loading && <Loader /> } {/* Show loader if loading state is true */ }

//   const Layout = ({ children }) => (
//     <>
//       <Pathinstitute />
//       {children}
//     </>
//   );


//   return (
//     <>

//     <Pop/>
//       <Scrolltop />
//       {/* <Intership/> */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/fullstack" element={<Fullstack />} />
//         <Route path="/placement" element={<Jobplacment />} />
//         <Route path="/more" element={<More />} />
//         <Route path="/again" element={<Again />} />
//         <Route path="/All" element={<All />} />
//         <Route path="/Aboutus" element={<All />} />

//         <Route path="/knowmore" element={<Knowmore/>}/>
//         <Route path="/Workspace" element={<Workspace />} />
//         <Route path="/Short" element={<Short />} />
//         <Route path="/Aws" element={<Aws />} />
//         <Route path="/Testing" element={<Testing />} />
//         <Route path="/QuickEnquiry" element={<QuickEnquiry />} />
//         <Route path="/studentregistration" element={<StudentRegistration />} />
//         <Route path="/adminLogin" element = {<AdminLogin/>}/>
//         <Route path="/StudentLogin" element={<StudentLogin />} />
//         <Route path="/StudentDashboard" element={<StudentDashboard />} />
//         <Route path="/admindashboard" element={<AdminDashboard />} />
//         <Route path="/StudentProfileForm" element={<StudentProfileForm />} />

//         <Route path="/admin/studentinfo" element={<Studentinfo />} />

//         <Route path="/admin/studentinfo" element={<Studentinfo />} />
//         {/* <Route path="/admin/courseDetails" element={< />} /> */}
//         <Route path="/admin/CourseSection" element={<Courses />} />
//         <Route path="/CourseSection/Test" element={<Test />} />
//         {/* <Route path="/admin/Workshop" element={<Studentinfo />} /> */}
//         {/* <Route path="/admin/Staffinfo" element={<Studentinfo />} /> */}





//       </Routes>
//       <Footer /> 
//        {/* <Softhero/>
//         <Softover/>
//         <Aboutus/> */}


//     </>
//   );
// }

// export default App;


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
import StudentLogin from "./Login/StudentLogin/StudentLogin";
import StudentDashboard from "./StudentDashboard/StudentDashboard";
import StudentNav from "./StudentDashboard/StudentNav";
import Scrolltop from "./Scrolltop";
import Pop from "../src/Home/pop/Pop"
import Courses from "./Admin/Test/Courses";
import Test from "./Admin/Test/Test";
import AdminLogin from "./Login/StudentLogin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";

import Testing from "./SHORTCOURSES/Software/Testing";
import QuickEnquiry from "./Quick Enquiry/QuickEnquiry";
import Studentinfo from "./Admin/Studentinfo";
import StudentProfileForm from "./Admin/StudentProfileForm"
import AdminNavbar from "./Admin/Adminnav";
// 

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

  const Layout = ({ children }) => (
    <>
      <Pathinstitute />
      {children}
    </>
  );


  return (
    <>
      {/* <Pop /> */}
      <Scrolltop />

      <Routes>

        <Route path="/" element={<Layout>     <Home />   </Layout>} />
        <Route path="/fullstack" element={<Layout>     <Fullstack />   </Layout>} />
        <Route path="/placement" element={<Layout>     <Jobplacment />   </Layout>} />
        <Route path="/more" element={<Layout>   <More /> </Layout>} />
        <Route path="/again" element={<Layout>     <Again />   </Layout>} />
        <Route path="/All" element={<Layout>  <All /></Layout>} />
        <Route path="/Aboutus" element={<Layout> <All /> </Layout>} />
        <Route path="/Workspace" element={<Layout> <Workspace />  </Layout>} />
        <Route path="/Short" element={<Layout>   <Short />  </Layout>} />
        <Route path="/Aws" element={<Layout> <Aws /> </Layout>} />
        <Route path="/Testing" element={<Layout><Testing /></Layout>} />
        <Route path="/QuickEnquiry" element={<Layout><QuickEnquiry /></Layout>} />
        <Route path="/studentregistration" element={<Layout><StudentRegistration /> </Layout>} />
        <Route path="/StudentLogin" element={<Layout> <StudentLogin /></Layout>} />
        <Route path="/StudentDashboard" element={<> <StudentNav /> <StudentDashboard /></>
        }
        />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />

        {/* <Route path="/admin/studentinfo" element={<Studentinfo />} /> */}

        <Route path="/admin/studentinfo" element={<><AdminNavbar/> <Studentinfo /></>} />
        {/* <Route path="/admin/courseDetails" element={< />} /> */}
        <Route path="/admin/CourseSection" element={<Courses />} />
        <Route path="/CourseSection/Test" element={<Test />} />
        {/* <Route path="/admin/Workshop" element={<Studentinfo />} /> */}
        {/* <Route path="/admin/Staffinfo" element={<Studentinfo />} /> */}
        <Route path="/StudentProfileForm" element={<StudentProfileForm />} />

        {/* <Route path="/Loginform" element={<Loginform />} /> */}




      </Routes>
      <Footer />
      {/* <Softhero/>
        <Softover/> */}


    </>
  );
}

export default App;
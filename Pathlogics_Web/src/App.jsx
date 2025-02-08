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
import CoursesQuestions from "./Admin/Test/CoursesQuestions";
import Short from "./SHORTCOURSES/Short";

import Softhero from "./SHORTCOURSES/Software/Softhero";

// import Hero from "./SHORTCOURSES/Awsdevops/Hero";
// import Overview from "./SHORTCOURSES/Awsdevops/Overveiw";
import CoursesStudentinfo from "./Admin/Courses/CoursesStudentinfo";
// import Aws from "./SHORTCOURSES/Awsdevops/Aws";
import Studentdetails from "./StudentDashboard/Studentdetails";

import StudentRegistration from "./StudentRegistration/Registration";
import StudentLogin from "./Login/StudentLogin/StudentLogin";
import StudentDashboard from "./StudentDashboard/StudentDashboard";
import StudentNav from "./StudentDashboard/StudentNav";
import Scrolltop from "./Scrolltop";
import Pop from "../src/Home/pop/Pop"
import Courses from "./Admin/Test/Courses";
import Test from "./Admin/Test/Test";
import Test2 from "./ABOUT/Test";

import AdminLogin from "./Login/StudentLogin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";

import Testing from "./SHORTCOURSES/Software/Testing";
import QuickEnquiry from "./Quick Enquiry/QuickEnquiry";

// import Salesforce from "../src/SHORTCOURSES/Salesforce Developer/Salesforce";
import SaForce from "./SHORTCOURSES/Salesforce Developer/SaForce";



import Quick from "./Quick Enquiry/Quick";
import PlacementJava from "./Fullstack/PlacementProg/FullStackJava/Java";
import FullstackWebPlacement from "./Fullstack/PlacementProg/FullStackWebDev/FullstackWebPlacement";
import MainDigitalMarketing from "./Fullstack/PlacementProg/DigitalMaketingPlacement/MainDigitalMarketing";
import MainDevops from "./Fullstack/PlacementProg/DevOps/MainDevops";
import MainTesting from "./Fullstack/PlacementProg/FullStackTesting/MainTesting"
// import FullWebBanner from "./Fullstack/PlacementProg/FullWebDev/FullWEbBanner";





import Java from "./SHORTCOURSES/CJava/Java";
import Advanced from "./SHORTCOURSES/AdvJava/Advanced";
import React from "./SHORTCOURSES/React/ReactCourse";
import ReactCourse from "./SHORTCOURSES/React/ReactCourse";
import AngularCourse from "./SHORTCOURSES/Angular/AngularCourse";
import NodeCourse from "./SHORTCOURSES/Node/NodeCourse";
import NativeCourse from "./SHORTCOURSES/Native/NativeCourse";
import DotNetCourse from "./SHORTCOURSES/DotNetCore/DotNetCourse";
import DotnetAngular from "./SHORTCOURSES/DotNetAngular/DotnetAngularCourse";
import DotnetAngularCourse from "./SHORTCOURSES/DotNetAngular/DotnetAngularCourse";

import Studentinfo from "./Admin/Studentinfo";
import StudentProfileForm from "./Admin/StudentProfileForm"
import AdminNavbar from "./Admin/Adminnav";
import StudentCourseDetails from "./StudentDashboard/StudentCourseDetails";
import CoursesList from "./Admin/Courses/CoursesList";
import Trainerinfo from "./Admin/TrainerDashboard";
import TrainerLogin from "./Login/StudentLogin/TrainerLogin";
import TrainerDashboard from "./Trainers/TrainerDashboard";
import StudentInfo from "./Trainers/Studentinfo";
import TrainerCoursesList from "./Trainers/Courses/CoursesList";
import TrainerCourses from "./Trainers/Courses";
import ManualComp from "./LongtermCourses/ManualTesting/ManualComp";
import DevComp from "./LongtermCourses/Devops/DevComp";
import DigitalComp from "./LongtermCourses/DigitalMarketing/DigitalComp";
//import DevComp from "./LongtermCourses/Devops/DevComp";

// import { useEffect } from "react";
import DotNetComponent from "./LongtermCourses/DotNet/DotNetComponent";
import TestingComp from "./LongtermCourses/Testing/TestingComp";
import SalesComp from "./LongtermCourses/SalesForce/SalesComp";
import PythonComp from "./LongtermCourses/Python/PythonComp";
import AiComp from "./LongtermCourses/FullStackAI/AiComp";
import JavaComponent from "./LongtermCourses/JavaDev/JavaComponent";
import WebCourses from "./LongtermCourses/FullstackWebCourses/WebCourses";
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
      {/* <Intership/> */}
      
      <Routes>

{/* //         <Route path="/" element={<Home />} />
//         <Route path="/salesforce" element={<SaForce/>}/>
//         <Route path="/fullstack" element={<Fullstack />} />
//         <Route path="/placement" element={<Jobplacment />} />
//         <Route path="/more" element={<More />} />
//         <Route path="/again" element={<Again />} />
//         <Route path="/All" element={<All />} />
//         <Route path="/Aboutus" element={<All />} />
     
//         <Route path="/Workspace" element={<Workspace />} />
//         <Route path="/Short" element={<Short />} />
//         <Route path="/Aws" element={<Aws />} />
//         <Route path="/Testing" element={<Testing />} />
//         <Route path="/QuickEnquiry" element={<QuickEnquiry />} />
//         <Route path="/studentregistration" element={<StudentRegistration />} />
//         <Route path="/StudentLogin" element={<StudentLogin />} />
//         <Route path="/StudentDashboard" element={<StudentDashboard />} /> */}

       
      <Route path="/" element={   <Layout>     <Home />   </Layout> }/>
                               <Route path="/salesforce" element={<SaForce/>}/>
      <Route path="/fullstack" element={   <Layout>     <Fullstack />   </Layout> } />
      <Route path="/placement" element={   <Layout>     <Jobplacment />   </Layout> }/>
      <Route path="/more" element={ <Layout>   <More /> </Layout> } />
      <Route path="/again" element={   <Layout>     <Again />   </Layout> }/>
      <Route path="/All" element={   <Layout>  <All /></Layout> } />
                                           <Route path = '/form' element={<Pop/>}/>
      <Route path="/Aboutus" element={ <Layout> <All /> </Layout> }/>
      <Route path="/Workspace"element={  <Layout> <Workspace />  </Layout> }/>
      <Route path="/Short"element={ <Layout>   <Short />  </Layout> } />
      {/* <Route path="/Aws"        element={ <Layout> <Aws /> </Layout> } /> */}
      <Route path="/Testing"element={<Layout><Testing /></Layout>}/>
      <Route path="/QuickEnquiry"element={<Layout><QuickEnquiry /></Layout>}/>
      <Route path="/studentregistration"element={<Layout><StudentRegistration /> </Layout>}/>
      <Route path="/StudentLogin"element={ <Layout> <StudentLogin /></Layout> }/>
      <Route path="/StudentDashboard" element={ <> <StudentNav /> <StudentDashboard /></>}/>
      <Route path="/PlacementJava" element={<Layout> <PlacementJava/></Layout> } />
      <Route path="/PlacementWeb" element={<Layout> <FullstackWebPlacement/></Layout> } />
      <Route path="/MainDigitalMarketing" element={<Layout> <MainDigitalMarketing/></Layout> } />
      <Route path="/MainDevops" element={<Layout> <MainDevops/></Layout> } />
      <Route path="/MainTesting" element={<Layout> <MainTesting/></Layout> } />
      
      



      {/* <Routes> */}

        <Route path="/AdminNavbar" element={ <Layout> <Home />  </Layout>} />
        <Route path="/salesforce" element={ <Layout> <SaForce/> </Layout>}/>
        <Route path="/Corejava" element={ <Layout> <Java/>  </Layout>}/>
        <Route path="/Advancedjava" element={<Layout> <Advanced/> </Layout>}/>
        <Route path="/Reactjs" element={<Layout> <ReactCourse/> </Layout>}/>
        <Route path="/Angularjs" element={<Layout> <AngularCourse/> </Layout>}/>
        <Route path="/Native" element={<Layout> <NativeCourse/> </Layout>}/>
        <Route path="/Nodejs" element={<Layout> <NodeCourse/> </Layout>}/>
        <Route path="/Dotnetcore" element={<Layout> <DotNetCourse/> </Layout>}/>
        <Route path="/Dotnetangular" element={<Layout> <DotnetAngularCourse/> </Layout>}/>
        <Route path="/fullstack" element={ <Layout> <Fullstack /> </Layout>} />

        

        <Route path="/placement" element={<Jobplacment />} />
        <Route path="/more" element={<More />} />
        <Route path="/again" element={<Again />} />
        <Route path="/All" element={<All />} />
        <Route path="/Aboutus" element={<All />} />
        <Route path = '/form' element={<Pop/>}/>
        <Route path="/Workspace" element={<Workspace />} />
        <Route path="/Short" element={<Short />} />
        <Route path="/Testing" element={<Testing />} />
        <Route path="/QuickEnquiry" element={<QuickEnquiry />} />
        <Route path="/studentregistration" element={<StudentRegistration />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />


        <Route path="/" element={<Layout>     <Home />   </Layout>} />
        <Route path="/fullstack" element={<Layout>     <Fullstack />   </Layout>} />
        <Route path="/placement" element={<Layout>     <Jobplacment />   </Layout>} />
        <Route path="/more" element={<Layout>   <More /> </Layout>} />
        <Route path="/again" element={<Layout>     <Again />   </Layout>} />
        <Route path="/All" element={<Layout>  <All /></Layout>} />
        <Route path="/Aboutus" element={<Layout> <All /> </Layout>} />
        <Route path="/Workspace" element={<Layout> <Workspace />  </Layout>} />
        <Route path="/Short" element={<Layout>   <Short />  </Layout>} />
        {/* <Route path="/Aws" element={<Layout> <Aws /> </Layout>} /> */}
        <Route path="/Testing" element={<Layout><Testing /></Layout>} />
        <Route path="/QuickEnquiry" element={<Layout><QuickEnquiry /></Layout>} />
        <Route path="/studentregistration" element={<Layout><StudentRegistration /> </Layout>} />
        <Route path="/StudentLogin" element={<Layout> <StudentLogin /></Layout>} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/test" element={<Test2 />} />


        <Route path="/ManualComp" element={<Layout>     < ManualComp/>   </Layout>} />
        <Route path="/Devops" element={<Layout>     < DevComp/>   </Layout>} />
        <Route path="/Diploma" element={<Layout>     < DigitalComp/>   </Layout>} />
        <Route path="/DotNet" element={<Layout>     < DotNetComponent/>   </Layout>} />
        <Route path="/FullstackTesting" element={<Layout>     < TestingComp/>   </Layout>} />
        <Route path="/Salesforce1" element={<Layout>     < SalesComp/>   </Layout>} />
        <Route path="/PythonDev" element={<Layout>     < PythonComp/>   </Layout>} />
        <Route path="/Development" element={<Layout>     < AiComp/>   </Layout>} />
        <Route path="/FullJavaDev" element={<Layout>     <JavaComponent/>   </Layout>} />
        <Route path="/FullMERN1" element={<Layout>     <WebCourses/>   </Layout>} />

        {/* <Route path="/admin/studentinfo" element={<Studentinfo />} /> */}

        <Route path="/admin/studentinfo" element={<><AdminNavbar /> <Studentinfo /></>} />
        <Route path="/admin/courseDetails" element={<><AdminNavbar /> <CoursesList /></>} />
        <Route path="/admin/CourseSection" element={<Courses />} />
        <Route path="/CourseSection/Test" element={<Test />} />
        {/* <Route path="/admin/Workshop" element={<Studentinfo />} /> */}
        {/* <Route path="/admin/Staffinfo" element={<Studentinfo />} /> */}
        <Route path="/StudentProfileForm" element={<StudentProfileForm />} />
        <Route path="/StudentDashboard" element={<> <StudentNav /> <StudentDashboard /></>}/>
        <Route path="/StudentCourseDetails" element={<> <StudentNav /> <StudentCourseDetails /></>} />
        <Route path="/admin/studentdetails" element={<><AdminNavbar /> <Studentdetails /></>} />
        <Route path="/admin/CoursesStudentinfo" element={<><AdminNavbar /> <CoursesStudentinfo /></>} />
        <Route path="/admin/CoursesQuestions" element={<><AdminNavbar /> <CoursesQuestions /></>} />
        <Route path="/admin/Trainerinfo" element={<><AdminNavbar /> <Trainerinfo /></>} />

        {/* <Route path="/Loginform" element={<Loginform />} /> */}

        <Route path="/trainerLogin" element={<TrainerLogin />} />
        <Route path="/trainerdashboard" element={<TrainerDashboard />} />
        <Route path="/trainer/studentinfo" element={<StudentInfo />} />
        <Route path="/trainer/courseDetails" element={<TrainerCoursesList/>} />
        <Route path="/trainer/CoursesStudentinfo" element={<> <CoursesStudentinfo /></>} />
        <Route path="/trainer/CourseSection" element={<TrainerCourses />} />
        <Route path="/trainer/CoursesQuestions" element={<> <CoursesQuestions /></>} />



      </Routes>
      <Footer />
      {/* <Softhero/>
        <Softover/> */}


    </>
  );
}

export default App;
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import FullStackJavaBanner from "./FullsatckJavaBanner";
import FullstackJavaCourse from "./FullstackJavaCourse";
import FullStackJavaFeatures from "./FullStackJavaFeatures";
import FullStackJavaOverview from "./FullStackJavaOverview";
import FullsatckJavaTools from "./FullsatckJavaTools";
import PaidInternship from "../../../SHORTCOURSES/AdvJava/PaidInternship";
import FullStackJavaCurriculum from "./FullStackJavaCurriculum";
import FullJavaOverview from "./FullJavaOverview";
import FullStackCareerOptions from "./FullStackCareerOptions";
import FullStackCertifications from "./FullStackCertifications";
import MoreCourses from "../../../SHORTCOURSES/Salesforce Developer/MoreCourses";
import Testimonials from "../DigitalMarketing/Testimonials";
import Companie from "../DigitalMarketing/Company";
import FullStackJavaFAQ from "./FullStackJavaFAQ";

import TalktoAdvisor from "./TalktoAdvisor";

function FullstackJavaComponent() {
  return (
    <>
      <div>
        <HelmetProvider>
          <Helmet>
            <title>
              {" "}
              Full Stack Java Developer Course In Pune with Certification
            </title>
            <meta
              name="description"
              content="Pathlogics Full Stack Java Developer Course in Pune with job-oriented training. Learn backend, frontend & databases with real-time projects."
            />
          </Helmet>
          <FullStackJavaBanner />
          <FullstackJavaCourse />
          <FullStackJavaFeatures />
          <FullStackJavaOverview />
          <FullsatckJavaTools />
          <PaidInternship />
          <FullStackJavaCurriculum />
          <FullJavaOverview />
          <FullStackCareerOptions />
          <FullStackCertifications />
          <MoreCourses />
          <Testimonials />
          <Companie />
          <FullStackJavaFAQ />
          <TalktoAdvisor />
        </HelmetProvider>
      </div>
    </>
  );
}

export default FullstackJavaComponent;

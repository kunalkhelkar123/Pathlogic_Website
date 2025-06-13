import React from 'react'
import AwsFirstPage from './AwsFirstPage';
import AWSDevOpsJourney from '../Awsjourney';
import AWSDevOpsOverview from '../Awsoverwive';
import AWSStack from './Awsstack';
import AWSDevOpsLogo from './Awslogo';
import AWSDevOpsModules from './Awsmodules';
import Courses from './Othercourse';
import Testimonials from '../../../Testimonials/Testimonials';
import Company from '../../DigitalMarketing/Company';
import AwsInternship from './AwsInternship';
import AwsOver from './AwsOver';
import Awscareer from './Awscareer';
import Awscertificate from './Awscertificate';
import AwsFAQ from './AwsFAQ';
import Talk_to_Our_Advisor from "../../../../../src/LongtermCourses/FullStackWebDevelopement/Talk_to_Our_Advisor"
function AwsComponent() {
  return (
    <>
    < AwsFirstPage/>
    <AWSDevOpsJourney/>
    <AWSDevOpsOverview/>
    <AWSStack/>
    <AWSDevOpsLogo/>
    <AwsInternship/>
    <AWSDevOpsModules/>
    <AwsOver/>
    <Awscareer/>
    <Awscertificate/>
    <Courses/>
  <Testimonials/>
  <Company/>
  <AwsFAQ/>
  <Talk_to_Our_Advisor/>
    </>
  )
}

export default AwsComponent;
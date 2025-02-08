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

function AwsComponent() {
  return (
    <>
    < AwsFirstPage/>
    <AWSDevOpsJourney/>
    <AWSDevOpsOverview/>
    <AWSStack/>
    <AWSDevOpsLogo/>
    <AWSDevOpsModules/>
    <Courses/>
  <Testimonials/>
  <Company/>
    </>
  )
}

export default AwsComponent;
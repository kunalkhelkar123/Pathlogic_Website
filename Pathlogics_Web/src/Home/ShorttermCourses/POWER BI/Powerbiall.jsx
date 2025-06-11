import React from 'react'
// import PowerBIFirstPage from './PowerBI'

import Power from './Power';
import Testimonials from '../../Testimonials/Testimonials';
import Company from '../DigitalMarketing/Company';
import PowerBIone from './PowerBIone';
import PowerBIFeatures from './PowerBIFeatures';
import PowerBIIntro from './PowerBIIntro';
import PowerBITools from './PowerBITools';
import PowerBiIpt from './PowerBiIpt';
import PowerbiDrop from './PowerbiDrop';
// import PowerbiPage from './PowerbiPage';
 import PowerOverview from './PowerOverview';
 import PowerBiRoles from './PowerBiRoles';
 import PowerBICertificate from './PowerBICertificate';
 import PowerText from './PowerText';
import PowerBIFaq from './PowerbiFaq';
import PowerBiadvisor from './PowerBiadvisor';
import Powerbiltest from './Powerbiltest';


function powerbiall() {
  return (
    <>
    <PowerBIone/>
    <Powerbiltest/>
    <PowerBIFeatures/>
    <PowerBIIntro/>
    <PowerBITools/>
    <PowerBiIpt/>
    <PowerbiDrop/>
    {/* <PowerbiPage/> */}
    <PowerOverview/>
    <PowerBiRoles/>
    <PowerBICertificate/>
    <PowerText/>
    <Testimonials/>
    <Company/>
    <PowerBIFaq/>
    <PowerBiadvisor/>
    </>
  )
}

export default powerbiall
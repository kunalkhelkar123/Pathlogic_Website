import React from 'react'
// import PowerBIFirstPage from './PowerBI'
import PowerBI from'./PowerBI';
import Powerbijourny from './Powerbijourny';
import PowerBIOverview from './PowerBIOverview';
import PowerBIStack from './PowerBIStack';
import PowerBICurriculum from './PowerBICurriculum';
import Power from './Power';
import Testimonials from '../../Testimonials/Testimonials';
import Company from '../DigitalMarketing/Company';
function powerbiall() {
  return (
    <>
    <PowerBI/>
    <Powerbijourny/>
    <PowerBIOverview/>
    <PowerBIStack/>
    <PowerBICurriculum/>
    <Power/>
    <Testimonials/>
    <Company/>
    </>
  )
}

export default powerbiall
import React from 'react'
// import Salesf from './Salesf'
import ProgramOverview from './ProgramOverview';

import SalesforceDevelopment from './MasterSalesforceDevelopement';
import Cmodules from './Cmodules';
import SaCurriculum from './SaCurriculum';
import SALESFORCE from './ShortTermSalesforce';
import Cjourney from './Cjourney';
import MoreCourses from './MoreCourses';
// import Placed from './Placed';
import Testimonials from '../../Home/Testimonials/Testimonials';
import Companie from '../../Fullstack/Companies/Companie';


function SaForce() {
  return (
    <div>

      <SALESFORCE />
      <Cjourney />
      {/* <Salesf/> */}
      <ProgramOverview />
      <SalesforceDevelopment />
      <SaCurriculum />
      <Cmodules />
      {/* <Placed/> */}
      <MoreCourses />
      <Testimonials />
      <Companie />


    </div>
  )
}

export default SaForce;
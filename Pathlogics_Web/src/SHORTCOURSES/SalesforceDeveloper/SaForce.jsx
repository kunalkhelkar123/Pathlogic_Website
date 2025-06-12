import React from 'react'
import Testimonials from '../../Home/Testimonials/Testimonials';
import Companie from '../../Fullstack/Companies/Companie';
import SalesforcePage from './SalesforcePage';
import SalesforceFeatures from './SalesforceFeatures';
import SalesforceInfo from './SalesforceInfo';
// import SalesforceFrameworks from './SalesforceInfo';
import SalesforceIpt from './SalesforceIpt';
import SalesforceDrop from './SalesforceDrop';
import Salesforceeight from './salesforceeight';
import SalesOptions from './SalesOptions';
import SalesCertificate from './SalesCertificate';
import SalesforceFaq from './SalesforceFaq';
import Sdvisor from './Sdvisor';
import SaleMenu from './SaleMenu';
import SaleTwo from './SaleTwo';
import SalesforceFrameworks from './SalesforceFrameworks';



function SaForce() {
  return (
    <div>
<SalesforcePage/>
<SaleTwo/>
<SalesforceFeatures/>
<SalesforceInfo/>
<SalesforceFrameworks/>
<SalesforceIpt/>
<SalesforceDrop/>
    <Salesforceeight/>
    <SalesOptions/>
    <SalesCertificate/>
    <SaleMenu/>
      <Testimonials />
      <Companie/>
      <SalesforceFaq/>
      <Sdvisor/>
    
    </div>
  )
}

export default SaForce;
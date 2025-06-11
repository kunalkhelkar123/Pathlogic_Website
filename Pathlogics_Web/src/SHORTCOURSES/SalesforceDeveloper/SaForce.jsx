import React from 'react'
import Testimonials from '../../Home/Testimonials/Testimonials';
import Companie from '../../Fullstack/Companies/Companie';
import SalesforcePage from './SalesforcePage';
import SalesforceFeatures from './SalesforceFeatures';
import SalesforceIntro from './SalesforceIntro';
import SalesforceFrameworks from './SalesforceFrameworks';
import SalesforceIpt from './SalesforceIpt';
import SalesforceDrop from './SalesforceDrop';
import Salesforceeight from './salesforceeight';
import SalesOptions from './SalesOptions';
import SalesCertificate from './SalesCertificate';
import SalesforceFaq from './SalesforceFaq';
import Sdvisor from './Sdvisor';
import SaleMenu from './SaleMenu';
import SaleTwo from './SaleTwo';



function SaForce() {
  return (
    <div>
<SalesforcePage/>
<SaleTwo/>
<SalesforceFeatures/>
<SalesforceIntro/>
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
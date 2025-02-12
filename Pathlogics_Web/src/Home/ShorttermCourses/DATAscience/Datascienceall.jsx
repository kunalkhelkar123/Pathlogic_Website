import React from 'react'
import DataSciencePlacement from './DataSciencePlacement'
import Datasciencejourny from './Datasciencejourny'
import DataScienceStack from './Datasciencestack'
import DataSciencePython from './DataSciencePython'
import DataScienceModules from './DataScienceModules'
import Testimonials from '../../Testimonials/Testimonials'
import Company from '../DigitalMarketing/Company'
import DataOverview from './DataOverview'

function Datascienceall() {
  return (
    <>
    <DataSciencePlacement/>
    <Datasciencejourny/>
    <DataOverview/>
    <DataScienceStack/>
    <DataSciencePython/>
    <DataScienceModules/>
    <Testimonials/>
    <Company/>

    </>
  )
}

export default Datascienceall
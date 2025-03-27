import React from 'react'
import Start from './Navbar/Start'
import Promotion from './Imagesdev/Promotion'
import Mernstack from './mernstack/Mernstack'
import Program from './programveiw/Program'
import Roadmap from './roadmap/Roadmap'
import Accordian from './Accordian/Accordian'
import Companie from './Companies/Companie'
import KeyHighlights from './Key Highlights/index'
import FAQ from './Questions/Questions'
import Scope from './Scope/Scope'


function Fullstack() {
  return (
    <div>
      <Promotion />
      <Mernstack />
      <Program />
      <KeyHighlights />
      <Roadmap />
  
      {/* <Accordian /> */}
      <Scope />
      <Companie />
      <FAQ />
      {/* <JavaDevelopment/> */}

    </div>
  )
}

export default Fullstack
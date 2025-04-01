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
import { Helmet } from "react-helmet";

function Fullstack() {
  return (
    <div>
      <Helmet>
        <title> Full Stack Developer Course in Pune with Placement | Pathlogics</title>
        <meta name="description" content="Join Pathlogics' Full Stack Developer Course in Pune with Placement. Master skills to become industry-ready. For a successful IT career, enroll now!" />
      </Helmet>
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
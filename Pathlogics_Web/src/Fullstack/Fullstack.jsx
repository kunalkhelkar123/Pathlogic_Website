import React from 'react'
import Start from './Navbar/Start'
import Promotion from './Imagesdev/Promotion'
import Mernstack from './mernstack/Mernstack'
import Program from './programveiw/Program'
import Roadmap from './roadmap/Roadmap'
import Accordian from './Accordian/Accordian'
import Companie from './Companies/Companie'
//import OurBlogs from './ourblogs bro/OurBlogs'
import JavaDevelopment from './javadevelopment/JavaDevelopment'
// import Javacarts from 

function Fullstack() {
  return (
    <div>
      <Promotion/>
      <Mernstack/>
      <Program/>
      <Roadmap/>
      <Accordian/>
      <Companie/>
      {/* <OurBlogs/> */}
      <JavaDevelopment/>
      {/* <Javacarts/> */}
    </div>
  )
}

export default Fullstack
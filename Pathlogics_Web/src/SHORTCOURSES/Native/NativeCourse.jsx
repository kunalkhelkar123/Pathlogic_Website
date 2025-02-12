import React from 'react'
import NativeShortTerm from './NativeShortTerm'
import NativeJourney from './NativeJourney';
import NativeProgramO from './NativeProgramO';
import NativeCurriculum from './NativeCurriculum';
import NativeCoreModules from './NativeCourseModules';
import MoreCourses from '../Salesforce Developer/MoreCourses';
import Testimonials from '../../Home/Testimonials/Testimonials';
import Companie from '../../Fullstack/Companies/Companie';
// <<<<<<< purva_dev2
import Masternative from './MasterNative';
// =======
// import NativeLogo from './NativeLogo';
// >>>>>>> dev2

function NativeCourse() {
  return (
    <div>
    <NativeShortTerm/>
    <NativeJourney/>
    <NativeProgramO/>
{/* // <<<<<<< purva_dev2 */}
    <Masternative/>
// =======
//     <NativeLogo/>
{/* // >>>>>>> dev2 */}
    <NativeCurriculum/>
    <NativeCoreModules/>
    <MoreCourses/>
    <Testimonials/>
    <Companie/>
    </div>
  )
}

export default NativeCourse;
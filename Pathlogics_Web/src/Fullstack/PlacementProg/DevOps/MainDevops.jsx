import React from "react";
import AllViewMore from "../../../AllViewMore";
import Testimonials from "../../../Home/Testimonials/Testimonials";
import Companie from "../../Companies/Companie";
import DevopsBanner from "./DevopsBanner";
import DevopsJourney from "./DevopsJourney";
import DevopsOverview from "./DevopsOverview";
import DevopsQuicklook from "./DevopsQuicklook";
import DevopsCurriculum from "./DevopsCurriculam";
import DevopsModules from "./DevopsModules";

function MainDevops() {
  return (
    <div>
      <DevopsBanner />
      <DevopsJourney />
      <DevopsOverview/>
      <DevopsQuicklook/>
      <DevopsCurriculum/>
      <DevopsModules/>
      <AllViewMore />
      <Testimonials />
      <Companie />
    </div>
  );
}

export default MainDevops;

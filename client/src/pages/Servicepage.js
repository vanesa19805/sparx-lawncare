// import React, { useState, useEffect } from "react";
import React from 'react';
// import HomeCard from '../components/HomeCard';
// import NavBar from "../components/Nav";
// import Apiroutes from "../utils/API";
import Wrapper from '../components/Wrapper';
import Services from "../components/Services";
import pavingImg from "../assets/paving.jpg";
import firepitImg from "../assets/firepit.jpg";
import mowingImg from "../assets/mowing.jpg";
import landscapingImg from "../assets/landscaping.jpg";
import plowingImg from "../assets/plowing.jpg";
import bushTreatmentImg from "../assets/bushTreatment.jpg";
//import Calendar from "./components/Calendar";


function ServicePage() {
  return (
    <>

      <Wrapper>
        <section className="row row-cols-1 row-cols-lg-3 g-4 m-4">


          <Services
            serviceImage={pavingImg}
            imageAlt={"paving"}
            title={"Pavers Work"}
            description={"Make Your Outdoor Living Dream A Reality! A permeable paver system can even be designed to harvest and recycle rainwater."}
            facebookLink={"/Facebook"}
            instagramLink={"/Instagram"}
            serviceLink={"/service_sch"}
            service='Paving'
          />

          <Services
            serviceImage={firepitImg}
            imageAlt={"firepit"}
            title={"Hardscape"}
            description={"Our associates are qualified to install, craft & construct a multitude of Hardscaping aesthetics for your pleasure or convenience."}
            facebookLink={"/Facebook"}
            instagramLink={"/Instagram"}
            serviceLink={"/service_sch"}
            service='Hardscape'
          />

          <Services
            serviceImage={mowingImg}
            imageAlt={"mowing"}
            title={"Lawn Care"}
            description={"Our Agronomists Tailor Plans & Formulas Specifically For your Location and Grass Type!"}
            facebookLink={"/Facebook"}
            instagramLink={"/Instagram"}
            serviceLink={"/service_sch"}
            service='Lawn Care'
          />
          <Services
            serviceImage={landscapingImg}
            imageAlt={"landsaping"}
            title={"Landscape"}
            description={"Your lawn is your pride, therefore it's ours. Our associates are trained to cut & treat your lawn to the highest quality standards available."}
            facebookLink={"/Facebook"}
            instagramLink={"/Instagram"}
            serviceLink={"/service_sch"}
            service='Landscaping'
          />
          <Services
            serviceImage={bushTreatmentImg}
            imageAlt={"bushTreatment"}
            title={"BushTreatment"}
            description={"Shrub disease protection begins with a comprehensive inspection of your landscape by one of our arborists."}
            facebookLink={"/Facebook"}
            instagramLink={"/Instagram"}
            serviceLink={"/service_sch"}
            service='BushTreatment'
          />
          <Services
            serviceImage={plowingImg}
            imageAlt={"plowing"}
            title={"Snow Plowing"}
            description={"Winter is the worst!' We hear it all too often. That's why we offer snow removal during the months of December - March for your convenience."}
            facebookLink={".Facebook"}
            instagramLink={"/Instagram"}
            serviceLink={"/service_sch"}
            service='Plowing'
          />
        </section>
      </Wrapper>
    </>
  )

}
export default ServicePage;
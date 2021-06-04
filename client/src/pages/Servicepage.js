// import React, { useState, useEffect } from "react";
import React from 'react';
// import HomeCard from '../components/HomeCard';
// import NavBar from "../components/Nav";
// import Apiroutes from "../utils/API";
import Services from "../components/Services";
import pavingImg from "../assets/paving.jpg";
import firepitImg from "../assets/firepit.jpg";
import mowingImg from "../assets/mowing.jpg";
import landscapingImg from "../assets/landscaping.jpg";
import plowingImg from "../assets/plowing.jpg";


function ServicePage() {
  return (
    <>
        <section className="row row-cols-1 row-cols-lg-3 g-4 m-4">

          <Services
            serviceImage={pavingImg}
            imageAlt={"paving"}
            title={"Pavers Work"}
            description={"Make Your Outdoor Living Dream A Reality! A permeable paver system can even be designed to harvest and recycle rainwater."}
            serviceLink={"/Pavers"}
          />

          <Services
            serviceImage={firepitImg}
            imageAlt={"firepit"}
            title={"Hardscape"}
            description={"Our associates are qualified to install, craft & construct a multitude of Hardscaping aesthetics for your pleasure or convenience."}
            serviceLink={"/Hardscaping"}
          />

          <Services
            serviceImage={mowingImg}
            imageAlt={"mowing"}
            title={"Lawn Care"}
            description={"Our Agronomists Tailor Plans & Formulas Specifically For your Location and Grass Type!"}
            serviceLink={"/lawncare"}
          />
          <Services
            serviceImage={landscapingImg}
            imageAlt={"landsaping"}
            title={"Landscape"}
            description={"Your lawn is your pride, therefore it's ours. Our associates are trained to cut & treat your lawn to the highest quality standards available."}
            serviceLink={"/Landscaping"}
          />

          <Services
            serviceImage={plowingImg}
            imageAlt={"plowing"}
            title={"Snow-Plowing"}
            description={"'Winter is the worst!' We hear it all too often. That's why we offer snow removal during the months of December - March for your convenience."}
            serviceLink={"/Snowplowing"}
          />

        </section>
      
          
        </div>
        </div>
       
      </div>
     

    </>
  )
}

export default ServicePage;
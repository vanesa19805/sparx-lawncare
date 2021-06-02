import React, { useState, useEffect } from "react";
//import logo from "../assets/lawn-mower-logo.jpg";
import HomeCard from '../components/HomePage';
//import ServicePage from './Servicepage';
import NavBar from "../components/Nav";
import Apiroutes from "../utils/API";


function onClick(e, title, thumbnail){
  let userinput= title;
  let image = thumbnail;
  console.log(userinput)
 
  Apiroutes.saveUserAction ({userinput})
  .then (res => {
    console.log("action saved!")
    
    })
    .catch(err => console.log(err))
}


function ServicePage() {

const [user, setUser]= useState([])

useEffect(() => {
  getUserServices()
}, []);

const getUserServices = () => {
  Apiroutes.getUserData()
  .then (res => {
    console.log(res.data)
    
    setUser(res.data)
    })
     
    .catch(err => console.log(err))
}

  return (
    
    <>
    <NavBar/>
      <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-3 row-cols-lg-3">

<div className="col">
          <HomeCard 
          id={user.userid +4}
          title={"Lawncare"}
          onClick={onClick}
          thumbnail={user.lawncare}
          />
        </div>

        <div className="col">
          <HomeCard 
          id={user.userid +5}
          title={"Lawncut"}
          onClick={onClick}
          thumbnail={user.lawncut}
          />
        </div>
        <div className="col">
          <HomeCard 
          id={user.userid +5}
          title={"Hardscaping "}
          onClick={onClick}
          thumbnail={user.hardscaping}
          />
        </div>
        <div className="col">
          <HomeCard 
          id={user.userid +6}
          title={"Snowplow"}
          onClick={onClick}
          thumbnail={user.snowplow}
          />
        </div>
        </div>
      </div>
    </>
  );
}
export default ServicePage;
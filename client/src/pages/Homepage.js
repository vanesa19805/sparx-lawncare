import React, { useState, useEffect } from "react";
import HomePage from './Homepage';
import ServicePage from './Servicepage';
import NavBar from "../components/Nav";
import Apiroutes from "../utils/API";


function onClick(e, title, thumbnail) {
  let userinput = title;
  let image = thumbnail;
  console.log(userinput)

  Apiroutes.saveUserAction({ userinput })
    .then(res => {
      console.log("action saved!")

    })
    .catch(err => console.log(err))
}

function Homepage() {

  const [user, setUser] = useState([])

  useEffect(() => {
    getUserServices()
  }, []);

  const getUserServices = () => {
    Apiroutes.getUserData()
      .then(res => {
        console.log(res.data)

        setUser(res.data)
      })

      .catch(err => console.log(err))
  }
  return (

    <>
      <NavBar />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-3 row-cols-lg-3">

          <div className="col">
            <HomeCard
              id={user.userid + 1}
              title={"Services"}
              onClick={onClick}
              thumbnail={user.services}
            />
          </div>

          <div className="col">
            <HomeCard
              id={user.userid + 2}
              title={"Contact "}
              onClick={onClick}
              thumbnail={user.contact}
            />
          </div>

          <div className="col">
            <HomeCard
              id={user.userid + 3}
              title={"Home"}
              onClick={onClick}
              thumbnail={user.home}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;

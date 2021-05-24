import React from "react";
import Card from "react-bootstrap/Card";

function About(props) {
  return (
    <div className="col-8 mx-auto p-5">
      
      <Card>
        <Card.Header>About Us</Card.Header>
        <Card.Body>          
          
            Sparx lawncare service is here to provide you with expert assistance. We specialize in lawn maintence, tree removal, and snow removal.
            Schedule your service online or give us a call more info. 
                   
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;

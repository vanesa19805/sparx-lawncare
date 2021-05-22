import React from "react";
import Card from "react-bootstrap/Card";

function About(props) {
  return (
    <div>
      <Card>
        <Card.Header>About Us</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            Sparx lawncare service is here to provide you with expert assistance. We specialize in lawn maintence, tree removal, and snow removal.
            Schedule your service online or give us a call more info. 
          </Card.Text>          
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;

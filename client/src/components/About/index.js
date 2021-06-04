import React from "react";
import Card from "react-bootstrap/Card";


function About(props) {
  return (
    <div className="text-center mt-5">
    {/* <div className="col-8 mx-auto p-5">  
      <Card>
        <Card.Header className="text-center">About Us</Card.Header>
        <Card.Body className="text-center">
            Sparx lawncare service is here to provide you with expert assistance. We specialize in lawn maintence, tree removal, and snow removal.
            Schedule your <a href="/servicepage">service online</a> or <a href="/contact">contact</a> us for more info.
        </Card.Body>
      </Card>
    </div> */}
    <div class="card-body">
    <h4 class="card-title">Let us Make Your Home Standout With a Well-Maintained Landscape</h4>
    <p class="card-text">Here at Sparx Lawncare we strive to create beautiful landscapes and excellent customer service.
    Our goal is to provide every customer a high quailty of service to fulfill their needs.
    <br></br>
    We are a growing company with well mannered and courteous employees. All of our employees are trained to complete the work at a high standard.
    <br></br>
    A big part of our success is due to our customers, who we cannot thank enough.
    <br></br>
    Schedule your <a href="/servicepage">service online</a> or <a href="/contact">contact us</a> for more info.
    </p>    
  </div>
    </div>
  );
}

export default About;

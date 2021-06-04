import React from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

function Services(props) {
  return (

      <>
        <section className="col">
          <section className="card text-center h-100 localCard lh-base">
            <img src={props.serviceImage} className="card-img-top h-60" alt={props.imageAlt}/>
            <section className="card-body">
              <h5 className="card-title fw-bold fs-5">{props.title}</h5>
              <h3 className="card-text">{props.description}</h3>
              <Link to={props.instagramLink} className="btn btn-dark myBtn m-2">Connect on Social Media!</Link>
              <Link to={props.serviceLink} className="btn btn-dark myBtn m-2">Go to Services</Link>
            </section>
          </section>
        </section>  
      </>
  );
}
    // <div>
    //   <Card style={{ width: "18rem" }}>
    //   <Card.Header>Provided Services</Card.Header>

    //     <Card.Body>
    //       <Card.Title>Type of Service Here</Card.Title>
    //       <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    //       <Card.Text>
    //         Service Description Here
    //       </Card.Text>
        
    //     <ListGroup className="list-group-flush">
    //       <ListGroupItem>Cras justo odio</ListGroupItem>
    //       <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    //       <ListGroupItem>Vestibulum at eros</ListGroupItem>
    //     </ListGroup>
       
    //       <Card.Link href="#">Card Link</Card.Link>
    //       <Card.Link href="#">Another Link</Card.Link>
    //     </Card.Body>
    //   </Card>
    // </div>

export default Services;
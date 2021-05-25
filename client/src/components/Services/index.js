import React from "react";


function Services(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
      <Card.Header>Provided Services</Card.Header>

        <Card.Body>
          <Card.Title>Type of Service Here</Card.Title>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Text>
            Service Description Here
          </Card.Text>
        
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
       
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
    
  );
}

export default Services;
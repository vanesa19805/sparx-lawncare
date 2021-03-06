import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import "./style.css";
// import Payment from "./components/Payment"
// import Calendly from "../Calendar"
import { useHistory } from "react-router-dom";
import Apiroutes from "../../utils/API";

function Schedule(props) {
  const history = useHistory();

  useEffect(() => {
    Apiroutes.getUser().then((res) => {
      console.log(res);
      if (res.data.loggedIn) {
        console.log("User is logged in!");
      } else {
        console.log("User is not logged in!");
        // redirect to somewhere
        history.push("/login");
      }
    });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your submission");
    history.push("/");
  };

  return (
    <div>
      <h3 className="text-center mt-5 fw-bolder" >{props.location.state.service}</h3>
      {/* <div className={"calendar"}>
        <Card>
            <Card.Header className="text-center">Schedule your free estimate</Card.Header>
            <Card.Body className="text-center">
              <Calendly/>
            </Card.Body>
        </Card>
        </div> */}
      <div className="col-10 mx-auto p-5 fs-5 fw-bold">
        <Card>
          <Card.Header className="text-center fs-5 fw-bold">Send us a message</Card.Header>
          <Form className="p-3" onSubmit={handleFormSubmit}>
            <Row className="mb-3">
              <Form.Label>Name</Form.Label>
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Service</Form.Label>
              <Form.Control
                type="service"
                placeholder={props.location.state.service}
                value={props.location.state.service}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Questions/Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Questions or Comments"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
      <div className="col-10 mx-auto p-5 fs-5 fw-bold ">
        <Card>
          <Card.Header className="text-center fs-5 fw-bold">Contact Us</Card.Header>
          <Card.Body className="text-center">
            To reach out to us about a job or an issue, please
            <a
              href={"mailto:sparxlanwncare@gmail.com?subject=Lawncare Services"}
            >
              {" "}
              email us
            </a>{" "}
            or call us at <a href="tel:1-800-sparx-lwn">1-800-Sparx-Lwn</a>.
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Schedule;

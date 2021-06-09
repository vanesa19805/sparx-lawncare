import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Services(props) {
  return (
    <div>
      <section className="col">
        <section className="card text-center h-100 localCard lh-base">
          <img
            src={props.serviceImage}
            className="card-img-top h-60"
            alt={props.imageAlt}
          />
          <section className="card-body">
            <h5 className="card-title fw-bold fs-5">{props.title}</h5>
            <h3 className="card-text">{props.description}</h3>
            <Link to={props.facebookLink} className="btn btn-dark myBtn m-2">
              Connect on Our Face Book Page!
            </Link>
            <Link to={props.instagramLink} className="btn btn-dark myBtn m-2">
              Connect on Our Instagram Page!
            </Link>
            <Link
              to={{
                pathname: props.serviceLink,
                state: { service: props.service },
              }}
              className="btn btn-dark myBtn m-2"
            >
              Book a Service
            </Link>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Services;

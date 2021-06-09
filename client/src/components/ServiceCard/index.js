import React from "react";
import Image1 from "../../assets/mowing.jpg";
import Image2 from "../../assets/landscaping.jpg";
import Image3 from "../../assets/plowing.jpg";

function ServiceCard(props) {
  return (
    <div className="bg-light m-5 fs-5 fw-bold">
        <h2 className="text-center pt-3">Some of Our Services</h2>
      <div className="row row-cols-1 row-cols-md-3 m-5">
        <div className="col">
          <div className="card text-white col-10">
            <img src={Image1} className="card-img" alt="..." />
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
              <h3 className="text-center">Lawn Mowing</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white col-10">
            <img src={Image2} className="card-img" alt="..." />
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
              <h3 className="text-center">Mulching</h3>
            </div>
          </div>
        </div>
          <div className="col">
            <div className="card text-white col-12">
              <img src={Image3} className="card-img" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <h3 className="text-center">Snow Removal</h3>
              </div>
            </div>
          </div>        
      </div>
    </div>
  );
}

export default ServiceCard;

import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpeacialProduct = () => {
  return (
    <div className="col-4">
      <div className="speacial-product-card">
        <div className="d-flex justify-content-between">
          <div className="image">
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="speacial-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">SmartWatch</h6>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="text-danger">$100</span> &nbsp;
              <strike>$200</strike>
            </p>
            <div className="discount-still d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>365 </b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="product-count my-3">
              <p>Product: 5</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar" style={{ width: "25%" }}></div>
              </div>
            </div>
            <Link className="button">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeacialProduct;

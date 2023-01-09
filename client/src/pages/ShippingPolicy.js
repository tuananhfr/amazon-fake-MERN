import React from "react";
import BreadCrumb from "../components/BreadCrumb";

import Helmet from "../components/Helmet";

const ShippingPolicy = () => {
  return (
    <Helmet title="Shipping Policy">
      <BreadCrumb title="Shipping Policy" />
      <div className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default ShippingPolicy;

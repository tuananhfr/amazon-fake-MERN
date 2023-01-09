import React from "react";
import BreadCrumb from "../components/BreadCrumb";

import Helmet from "../components/Helmet";

const PrivacyPolicy = () => {
  return (
    <Helmet title="Privacy Policy">
      <BreadCrumb title="Privacy Policy" />
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

export default PrivacyPolicy;

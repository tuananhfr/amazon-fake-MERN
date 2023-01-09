import Link from "antd/es/typography/Link";
import React from "react";
import CustomInput from "../components/CustomInput";
const Login = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <form>
          <CustomInput
            type="text"
            label="Email Address"
            id="email"
            name="email"
            // onChng={formik.handleChange("email")}
            // onBlr={formik.handleBlur("email")}
            // val={formik.values.email}
          />
          <CustomInput
            type="password"
            label="Password"
            id="password"
            name="password"
            // onChang={formik.handleChange("email")}
            // onBlur={formik.handleBlur("email")}
            // value={formik.values.email}
          />
          <div className="mb-3 text-end">
            <Link to="forgot-password" className="">
              Forgot Password?
            </Link>
          </div>
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import "./Login.css";
import globeVar from "../../GlobeApi";
import LoginError2 from "./LoginError";
import LoginError1 from "./LoginError1";
import axios from "axios";

const Login = () => {
  sessionStorage.setItem("isLogin", 0);
  // if there's no user, show the login form
  const [user, setUser] = useState([]);
  const [passwordType, setPasswordType] = useState("password");

  const { handleChange, handleSubmit, values, errors } = LoginError1(
    submit,
    LoginError2
  );

  function submit() {
    console.log("Submitted Succesfully");
    userlogin(values.email, values.password);
  }

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  //api call of login
  const userlogin = (email, password) => {
    console.warn(email, password);
    let item = { email: email, password: password };

    axios.post(globeVar + "login", item).then((response) => {
      if (response.data.success === 1) {
        
          setUser(response.data.data);
          localStorage.setItem("user", response.data.data);
          sessionStorage.setItem("user", JSON.stringify(response.data.data));
          window.location.href = "/dashboard";
      }
    });
  };

  return (
    <div>
      <section className="breadcrumb-box">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-auto">
              <h1>LOGIN</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light-pink">
        <div className="container section-padding">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 col-xl-6">
              <div className="form-box">
                <form action="" onSubmit={handleSubmit}>
                  <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-xl-9">
                      <div className="form-row">
                        <div className="form-group input-box col-sm-12">
                          <label for="email">Email</label>
                          <input
                            type="text"
                            className="form-control inputError"
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            id="email"
                            placeholder="Your email here"
                          />
                          {errors.email && (
                            <p className="error">{errors.email}</p>
                          )}
                        </div>
                        <div className="form-group input-box col-sm-12">
                          <label for="password">Password</label>
                          <div className="position-relative">
                            <input
                              type="hidden"
                              name="action"
                              value="login_check"
                            />
                            <input
                              type={passwordType}
                              className="form-control inputError"
                              onChange={handleChange}
                              value={values.password}
                              name="password"
                              id="password"
                              placeholder="Your password here"
                            />
                            <a onClick={togglePassword}>
                              {" "}
                              {passwordType === "password" ? (
                                <i className="fa fa-eye-slash input-icon"></i>
                              ) : (
                                <i className="fa fa-eye input-icon "></i>
                              )}
                            </a>
                            {errors.password && (
                              <p className="error">{errors.password}</p>
                            )}
                          </div>
                        </div>

                        <p className="weight-600 col-12 mb-4">
                          <Link to={`/forgotpassword`} className="color-txt">
                            Forgot Password
                          </Link>{" "}
                        </p>
                        <div className="form-group col-sm">
                          <input
                            type="submit"
                            value="Login"
                            className="btn gradient-btn px-5"
                          />
                        </div>
                        <p className="weight-600 col-12 mb-0">
                          Already have an account?{" "}
                          <Link to="/sign-up" className="color-txt">
                            Signup
                          </Link>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

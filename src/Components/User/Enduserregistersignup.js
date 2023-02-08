import React, { useState } from "react";
import Enduserregistersignup1 from "./Enduserregistersignup1";
import Enduserregistersignup2 from "./Enduserregistersignup2";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import formsideimg from "../../assets/images/form-side-img.png";
import globeVar from "../../GlobeApi";
import axios from "axios";

function Enduserregistersignup() {
  const [user, setUser] = useState([]);
  const { handleChange, handleSubmit, values, errors } = Enduserregistersignup1(
    submit,
    Enduserregistersignup2
  );

  function submit() {
    userregister(values.f_name, values.l_name, values.email, values.password);
  }

  //api of send email
  const userregister = (f_name, l_name, email, password) => {
    console.warn(f_name, l_name, email);
    let item = {
      first_name: f_name,
      last_name: l_name,
      email: email,
      password: password,
    };
    axios.post(globeVar + "signup", item).then((response) => {
      if (response.data.success === 1) {
      
          setUser(response.data.data);
          window.location = "/";
      }
    });
  };

  return (
    <div>
      <section className="breadcrumb-box">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-auto">
              <h1>REGISTER</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding">
          <div className="row justify-content-center flex-column-reverse flex-lg-row">
            <div className="col-12 col-md-12 col-lg-10 col-xl-8">
              <div className="form-box">
                <form action="" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 col-xl-10">
                      <h3 className="title">Create Your Account</h3>
                      <div className="form-row align-items-baseline">
                        <div className="form-group input-box col-sm-6">
                          <label for="firstname">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength="30"
                            name="f_name"
                            id="f_name"
                            onChange={handleChange}
                            value={values.f_name}
                            placeholder="Your fist name here"
                          />
                          {errors.f_name && (
                            <p className="error">{errors.f_name}</p>
                          )}
                        </div>
                        <div className="form-group input-box col-sm-6">
                          <label for="lastname">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength="30"
                            name="l_name"
                            id="l_name"
                            onChange={handleChange}
                            value={values.l_name}
                            placeholder="Your last name here"
                          />
                          {errors.l_name && (
                            <p className="error">{errors.l_name}</p>
                          )}
                        </div>
                        <div className="form-group input-box col-sm-12">
                          <label for="email">Email</label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            value={values.email}
                            placeholder="Your email here"
                          />
                          {errors.email && (
                            <p className="error">{errors.email}</p>
                          )}
                        </div>
                        <div className="form-group input-box col-sm-12">
                          <label for="password">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            maxLength="30"
                            name="password"
                            id="password"
                            onChange={handleChange}
                            value={values.password}
                            placeholder="Your password here"
                          />
                          {errors.password && (
                            <p className="error">{errors.password}</p>
                          )}
                        </div>

                        <div className="form-group col-sm pr-4">
                          <input
                            type="submit"
                            value="Signup"
                            className="btn gradient-btn px-5"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="weight-600 mb-0 ">
                          Already have an account?{" "}
                          <Link to={`/`} className="color-txt">
                            Login
                          </Link>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-10 col-xl-4 text-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Enduserregistersignup;

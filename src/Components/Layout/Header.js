import React from "react";
const Header = () => {
  return (
    <header className=" sticky-top homepage">
      <nav className="container navbar navbar-expand-xl navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto"></ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="btn border-btn" href="/">
                LOGIN
              </a>
            </li>
            <li className="nav-item ml-0 ml-lg-3">
              <a className="btn btn-regular" href="/sign-up">
                REGISTER
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

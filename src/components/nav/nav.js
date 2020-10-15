import React from "react";
import useScrollDetect from "../../services/useScrollDetect"

const Nav = () => {
  const {shadow} = useScrollDetect()
  return (
    <nav className={shadow ? "box-shadow" : null}>
      <div className="links-holder">
        <div className="logo-text">
          <img src={require("../../assets/logo.svg")}/>
        </div>
        <div className="nav-links">
          <a>Features</a>
          <a>Pricing </a>
          <a>Resources</a>
        </div>
      </div>
      <div className="login-links">
        <a>Login</a>
        <a className="signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Nav;

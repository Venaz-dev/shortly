import React, {useRef, useState} from "react";
import useScrollDetect from "../../services/useScrollDetect";

const Nav = () => {
  const { shadow } = useScrollDetect();
  const menuRef = useRef()
  const [showMenu, setMenu] = useState(false)

  const toogleMenu = () => {
    if(showMenu){
      menuRef.current.style.transform = "translateX(100vw)"
      
    }else{
      menuRef.current.style.transform = "translateX(0)"
    }
    setMenu(!showMenu)
  }
  return (
    <nav className={shadow ? "box-shadow" : null}>
      <div className="links-holder">
        <div className="logo-text">
          <img src={require("../../assets/logo.svg")} />
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
      <div className="burger-menu">
        <button onClick={toogleMenu}>&#9776;</button>
      </div>

      <div ref={menuRef}  className="off-canvas">
        <div className="nav-links">
          <a>Features</a>
          <a>Pricing </a>
          <a>Resources</a>
        </div>
        <div className="login-links">
          <a>Login</a>
          <a className="signup">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={require("../../assets/logo_white.svg")}/>
      </div>
      <div className="links">
          <div>
              <h5>Features</h5>
              <a>Link Shortening</a>
              <a>Branded Links</a>
              <a>Analytics</a>
          </div>
          <div>
              <h5>Resources</h5>
              <a>Blog</a>
              <a>Developers</a>
              <a>Support</a>
          </div>
          <div>
              <h5>Company</h5>
              <a>About</a>
              <a>Our Team</a>
              <a>Careers</a>
              <a>Contact</a>
          </div>



      </div>
      <div className="socials">
          <img src={require("../../assets/icon-facebook.svg")}/>
          <img src={require("../../assets/icon-twitter.svg")}/>
          <img src={require("../../assets/icon-pinterest.svg")}/>
          <img src={require("../../assets/icon-instagram.svg")}/>

      </div>
    </div>
  )
}

export default Footer

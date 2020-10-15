import React, { useState } from "react";

const Home = () => {
  const [link, setLink] = useState("");
  const [errState, setError] = useState(false)

  const handleChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = () => {
    if(link === ""){
      setError(true)
    }else{
      setError(false)
    }
  }
  return (
    <div className="homepage">
      <div className="get-started-holder">
        <div className="text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div className="image">
          <img src={require("../../assets/illustration-working.svg")} />
        </div>
      </div>

      <div className="statistics">
        <div className="shorten-holder">
        <div className="shorten">
          <input
            type="text"
            value={link}
            onChange={handleChange}
            className={errState && "input-error"}
            placeholder="Shorten a link here..."
          />
          <button className="btn" onClick={handleSubmit}>Shorten It!</button>
          {
            errState && <p className="error">Please add a link</p>
          }
        </div>
        <div className="shortened-links">

        </div>
        </div>
        <div className="header-text">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="content">
          <div className="divider"></div>
          <div className="cards">
            <div className="card">
              <div className="image">
                <img src={require("../../assets/icon-brand-recognition.svg")} />
              </div>
              <div className="text">
                <h2>Brand Recognition</h2>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require("../../assets/icon-detailed-records.svg")} />
              </div>
              <div className="text">
                <h2>Detailed Records</h2>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img
                  src={require("../../assets/icon-fully-customizable.svg")}
                />
              </div>
              <div className="text">
                <h2>Fully Customizable</h2>
                <p>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="boost">
        <h1>Boost your links today</h1>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default Home;

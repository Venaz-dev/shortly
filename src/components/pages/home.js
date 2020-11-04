import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const [link, setLink] = useState("");
  const [prevLinks, setPrevLinks] = useState(get());
  const [errState, setError] = useState(false);
  const [selectedLink, setSelectLink] = useState();
  const selected = useRef();
  const shortenBtn = useRef();
  const token = "rvVVVO0T3j7CsKw1EvnPe8t0MkLp5yQGjboOZEJ2";

  const [disable, setDisable] = useState(false);

  let linkRequest = {
    destination: "https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g",
    domain: { fullName: "rebrand.ly" },
    //, slashtag: "A_NEW_SLASHTAG"
    //, title: "Rebrandly YouTube channel"
  };

  let requestHeaders = {
    "Content-Type": "application/json",
    apikey: "YOUR_API_KEY",
    workspace: "YOUR_WORKSPACE_ID",
  };

  const handleChange = (event) => {
    setLink(event.target.value);
  };

  const checkLink = () => {
    return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
      link
    );
  };

  
  const copyLink = (text, index) => {
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    let newArr = [...prevLinks]
    newArr[index].copied = true
    setPrevLinks(newArr)
    
    setTimeout(() => {
      let newArr = [...prevLinks]
      newArr[index].copied = false
      setPrevLinks(newArr)
    }, 2000)
  };

  const handleSubmit = () => {
    if (link === "") {
      setError(true);
    } else if (!checkLink()) {
      setError(true);
    } else {
      setError(false);
      setDisable(true);
      shortenBtn.current.style.animation = "pulse-black 2s infinite;";
      fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          Authorization: "319a3623916b3845f689f709a3c123f14824e19f",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: link,
          domain: "bit.ly",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDisable(false);
          createShortLink(link, data.link);
          shortenBtn.current.style.animation = "none";
        })
        .catch((err) => {
          console.log(err);
          setDisable(false);
          shortenBtn.current.style.animation = "none";
        });
    }
    setLink("");
  };

  function createShortLink(link, shortLink) {
    // prepare data for local storage
    let data = {
      link, // original link
      shortLink, // shortened link
      copied: false,
    };

    store(data);
  }
  // store new items
  function store(item) {
    let items = get(); // look for any previously stored links
    // let items = []
    items.push(item);

    if (items.length > 5) {
      items.reverse();
      items.pop();
      // items.reverse();
    }

    // add new links to existing links
    console.log("console", items);
    localStorage.setItem("items", JSON.stringify(items)); // locally store updated items array

    setPrevLinks(items);
  }

  // Look for Items in local storage
  function get() {
    let items;
    // check for previously stored items

    if (localStorage.getItem("items") == null) {
      items = [];
      // if no items found in local storage create array
    } else {
      items = JSON.parse(localStorage.getItem("items"));
      // if items found in local storage retrieve array
    }
    return items.reverse();
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
              className={errState ? "input-error" : null}
              placeholder="Shorten a link here..."
            />
            <button
              className="btn"
              onClick={handleSubmit}
              disabled={disable}
              ref={shortenBtn}
            >
              Shorten It!
            </button>
            {errState && <p className="error">Please add a link</p>}
          </div>
          <div className="shortened-links">
            {prevLinks.map((link, i) => (
              <div key={i} className="short-link">
                <div className="links">
                  <p className="long">{link.link}</p>
                  <p className="short">{link.shortLink}</p>
                </div>
                <button
                  className={`${link.copied && 'active'} btn `}
                  onClick={() => copyLink(link.shortLink, i)}
                >
                  {link.copied ? "Copied" : "Copy"}
                </button>
              </div>
            ))}
            <p style={{ display: "none " }} ref={selected}>
              {selectedLink}
            </p>
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

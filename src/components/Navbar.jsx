import React, { useEffect, useState } from "react";
import logonasa from "./img/logonasa.png";
import logonasa2 from "./img/logonasa2.png";
import logonasa3 from "./img/logonasa3.png";
import logonasa4 from "./img/logonasa4.png";
import logonasa5 from "./img/logonasa5.png";
import logoksp from "./img/logoksp.png";
import logosf from "./img/starfleet.png";
import "./Navbar.css";

const Navbar = ({
  brand,
  keywords,
  onKeywordsChange,
  onApplyFilter,
}) => {
  const [logoIndex, setLogoIndex] = useState(0);

  const logos = [
    logonasa,
    logonasa2,
    logonasa3,
    logonasa4,
    logonasa5,
    logoksp,
    logosf,
  ];

  const handleKeywordsChange = (event) => {
    onKeywordsChange(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onApplyFilter();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [logos.length]);

  const handleApplyClick = () => {
    onApplyFilter();
  };

  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="logo-container">
            {logos.map((logo, index) => (
              <img
                key={index}
                className={`logo ${index === logoIndex ? "visible" : ""}`}
                src={logo}
                alt="logo"
              />
            ))}
          </div>
          <a className="navbar-brand titulo" href="/">
            {brand}
          </a>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="filter-input form-control"
            placeholder="Filter Keyword"
            value={keywords}
            onChange={handleKeywordsChange}
            onKeyDown={handleKeyDown}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-light"
              type="button"
              onClick={handleApplyClick}
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

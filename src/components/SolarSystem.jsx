import React from 'react';
import '../styles/SolarSystem.css';

const SolarSystem = () => {
  return (
    <div className="solar-system-container">
      <div className="description">
        <h1>Solar System</h1>
        <hr />
        <p>
          I know this is not the first one on React, but I'm a space lover, and I wanted to create mine :)
        </p>
        <p>
          Here is a true time scaled solar-system, which means that every object has a time relative to an Earth year. You can change the number in seconds of the
          <br />
          <code>$year-in-second</code> variable to increase the speed of revolutions. Here 1 year = 30 seconds.
        </p>
        <p className="hide">
          Note the css tricks for the Saturn rings (box-shadow) and reverse animation to compensate the orbit.
        </p>
        <hr />
        <p className="author">
          Inspiration from <i className="fa fa-heart" href ="https://codepen.io/kowlor/"></i> by Malik Dellidj on CodePen
        </p>
        <p className="links">
          <a className="fa fa-codepen icon" href="https://codepen.io/kowlor/" target="_blank" rel="noopener noreferrer"></a>
          <a className="fa fa-github-alt icon" href="https://github.com/KOWLOR" target="_blank" rel="noopener noreferrer"></a>
          <a className="fa fa-twitter icon" href="https://twitter.com/Dathink" target="_blank" rel="noopener noreferrer"></a>
        </p>
      </div>
      <div className="solar-syst">
        <div className="sun"></div>
        <div className="mercury"></div>
        <div className="venus"></div>
        <div className="earth"></div>
        <div className="mars"></div>
        <div className="jupiter"></div>
        <div className="saturn"></div>
        <div className="uranus"></div>
        <div className="neptune"></div>
        <div className="pluto"></div>
        <div className="asteroids-belt"></div>
      </div>
    </div>
  );
};

export default SolarSystem;
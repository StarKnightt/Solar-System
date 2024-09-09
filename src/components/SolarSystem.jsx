import React from 'react';
import '../styles/SolarSystem.css';

const SolarSystem = () => {
    const stars = Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="fa-solid fa-star"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            fontSize: `${Math.random() * 10 + 5}px`,
            '--i': i,  // for animation delay
          }}
        ></div>
      ));
    return (
        <div className="solar-system-container">
             <div className="starfield">
        {stars}
      </div>
           <div className="starfield">
        <div className="fa-solid fa-star" style={{ top: '10%', left: '20%', fontSize: '12px' }}></div>
        <div className="fa-solid fa-star" style={{ top: '30%', left: '50%', fontSize: '8px' }}></div>
        <div className="fa-solid fa-star" style={{ top: '50%', left: '80%', fontSize: '15px' }}></div>
        <div className="fa-solid fa-star" style={{ top: '70%', left: '10%', fontSize: '5px' }}></div>
        <div className="fa-solid fa-star" style={{ top: '90%', left: '40%', fontSize: '10px' }}></div>
        <div className="fa-solid fa-star" style={{ top: '15%', left: '75%', fontSize: '20px' }}></div>
        <div className="fa-solid fa-star" style={{ top: '5%', left: '30%', fontSize: '7px' }}></div>
        <div className="fa-solid fa-star" style={{ top: '5%', left: '30%', fontSize: '7px' }}></div>
        {/* Add more stars as needed */}
      </div>
            <div className="description">
                <h1>Solar System</h1>
                <hr />
                <p>
                    Hey I'm Prasenjit, I'm a space lover, and I wanted to create a solar system using React.js, I know I'm not the first who is building it
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
                    Inspiration from <i className="fa fa-heart"></i> by
                    <a href="https://codepen.io/kowlor/" target="_blank" rel="noopener noreferrer"> Malik Dellidj</a> on CodePen
                </p>

                <p className="star">
                    Give it a star ⭐ on GitHub, if you liked it.
                </p>
                <p className="links">
                    <a className="fa-brands fa-codepen" href="https://codepen.io/StarKnightt" target="_blank" rel="noopener noreferrer"></a>
                    <a className="fa-brands fa-github" href="https://github.com/StarKnightt" target="_blank" rel="noopener noreferrer"></a>
                    <a className="fa-brands fa-x-twitter" href="https://x.com/Star_Knight12" target="_blank" rel="noopener noreferrer"></a>
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
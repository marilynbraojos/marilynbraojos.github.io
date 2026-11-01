import React from "react";
import "./Home.css";

const HEADSHOT = require("../../assets/headshot.png");

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-card">
          <div className="headshot-wrapper">
            <img src={HEADSHOT} className="headshot" alt="Marilyn Braojos" />
          </div>
          
          <div className="intro-content">
            <div className="greeting-badge">Welcome</div>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight-name">Marilyn</span>
            </h1>
            
            <div className="tag-pills">
              <span className="tag-pill">Researcher</span>
              <span className="tag-pill">Engineer</span>
              <span className="tag-pill">Rocket Enthusiast</span>
            </div>

            <p className="hero-bio">
              I am a PhD candidate in robotics with the aerospace engineering department at Georgia Tech with an expected graduation of August 2027. My research focuses on increasing resilience and autonomy in space systems with atomic clock predictive modeling and uncertainty-aware intelligent algorithms.
            </p>

            <div className="education-highlights">
              <a
                href="https://ssdl.gatech.edu/2025/02/04/marilyn-braojos-gutierrez/"
                target="_blank"
                rel="noopener noreferrer"
                className="edu-item edu-item-link"
              >
                <div>
                  <strong>PhD in Aerospace Engineering Robotics</strong>
                  <span className="edu-sub">Georgia Tech — Exp. August 2027</span>
                </div>
              </a>

              <a
                href="https://dc.phys.ufl.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="edu-item edu-item-link"
              >
                <div>
                  <strong>MS in Mechanical Engineering</strong>
                  <span className="edu-sub">University of Florida — 2022</span>
                </div>
              </a>

              <a
                href="https://merge.mae.ufl.edu/about/people/mergelab_research_alumni/"
                target="_blank"
                rel="noopener noreferrer"
                className="edu-item edu-item-link"
              >
                <div>
                  <strong>BS in Mechanical Engineering & BS in Neuroscience</strong>
                  <span className="edu-sub">University of Florida — 2020</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
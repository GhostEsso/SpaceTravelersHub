/* eslint-disable no-trailing-spaces */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <h1 className="title">
        Space Travelers&apos; Hub
        <span className="subtitle">
          Your Gateway to Space Exploration
        </span>
      </h1>
      
      <div className="description">
        <p className="main-text">
          Join the next generation of space exploration with SpaceX. 
          Book your journey among the stars and participate in groundbreaking missions.
        </p>
        
        <div className="features">
          <div className="feature-item">
            <h3>🚀 Space Rockets</h3>
            <p>Access to cutting-edge SpaceX rockets for your space travel needs.</p>
            <Link to="/rockets" className="cta-link">View Available Rockets</Link>
          </div>
          
          <div className="feature-item">
            <h3>🛸 Space Missions</h3>
            <p>Participate in commercial and scientific missions around the globe.</p>
            <Link to="/missions" className="cta-link">Explore Missions</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

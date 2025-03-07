/* eslint-disable no-trailing-spaces */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/home.module.css';

const Home = () => (
  <div className={styles.homeContainer}>
    <div className={styles.homeContent}>
      <h1 className={styles.title}>
        Space Travelers&apos; Hub
        <span className={styles.subtitle}>
          Your Gateway to Space Exploration
        </span>
      </h1>
      
      <div className="description">
        <p className={styles.mainText}>
          Join the next generation of space exploration with SpaceX. 
          Book your journey among the stars and participate in groundbreaking missions.
        </p>
        
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <h3>🚀 Space Rockets</h3>
            <p>Access to cutting-edge SpaceX rockets for your space travel needs.</p>
            <Link to="/rockets" className={styles.rocketButton}>
              View Available Rockets
            </Link>
          </div>
          
          <div className={styles.featureItem}>
            <h3>🛸 Space Missions</h3>
            <p>Participate in commercial and scientific missions around the globe.</p>
            <Link to="/missions" className={styles.missionButton}>
              Explore Missions
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

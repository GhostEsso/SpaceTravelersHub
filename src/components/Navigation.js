import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import styles from '../styles/navigation.module.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logoSection}>
          <img src={planet} alt="Space Travelers' Hub Logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>

        <button
          type="button"
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={isMenuOpen ? styles.active : ''}>
          <ul className={styles.navLinks}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                onClick={closeMenu}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rockets"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                onClick={closeMenu}
              >
                ROCKETS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/missions"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                onClick={closeMenu}
              >
                MISSIONS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-profile"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                onClick={closeMenu}
              >
                PROFILE
              </NavLink>
            </li>
          </ul>
        </nav>

        <div
          className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`}
          onClick={closeMenu}
          role="presentation"
        />
      </div>
    </header>
  );
};

export default Navigation;

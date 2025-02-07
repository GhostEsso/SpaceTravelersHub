import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import styles from '../styles/navigation.module.css';

const Navigation = () => (
  <header className={styles.navbar}>
    <div className={styles.navbarContent}>
      <div className={styles.logoSection}>
        <img src={planet} alt="Space Travelers' Hub Logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>

      <nav>
        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ''}`}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rockets"
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ''}`}
            >
              ROCKETS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ''}`}
            >
              MISSIONS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-profile"
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ''}`}
            >
              PROFILE
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navigation;

import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navigation = () => (
  <header className="border-bottom  color-red mb-5 py-2">
    <div>
      <img src={planet} alt="logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>

    <nav>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/rockets">ROCKETS</NavLink>
        </li>
        <li>
          <NavLink to="/missions">MISSIONS</NavLink>
        </li>
        <li>
          <NavLink to="/my-profile">PROFILE</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;

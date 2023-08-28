import { Link } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navigation = () => (
    <header>
        <div>
            <img src={planet} alt="logo" />
            <h1>Space Travelers&apos; Hub</h1>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/">Rockets</Link>
                </li>
                <li>
                    <Link to="/missions">Missions</Link>
                </li>
                <li>
                    <Link to="/my-profile">My profile</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Navigation;

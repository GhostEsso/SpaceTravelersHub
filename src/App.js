import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './components/rockets/Rockets';
import Missions from './components/pages/Missions';
import MyProfile from './components/pages/MyProfile';
import './styles/header.css';
import './styles/rockets.css';

import Navigation from './components/Navigation';

import './styles/index.css';


const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  </Router>
);

export default App;

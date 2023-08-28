import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Rockets from './components/rockets/Rockets';
import Missions from './components/pages/Missions';
import MyProfile from './components/pages/MyProfile';
import './styles/header.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  </BrowserRouter>
);

export default App;

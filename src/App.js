import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './styles/header.css';
import './styles/rockets.css';
import Navigation from './components/Navigation';
import './styles/index.css';
import { getMissions } from './redux/Mission/MissionSice';
import { FetchData } from './redux/rockets/Api';
import Rockets from './components/rockets/Rockets';
import Missions from './components/pages/Missions';
import MyProfile from './components/pages/MyProfile';
import Home from './components/Home/Home';
import './styles/app.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

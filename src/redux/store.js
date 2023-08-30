import { configureStore } from '@reduxjs/toolkit';
import Rocketslice from './rockets/RocketsSlice';
import MissionSice from './Mission/MissionSice';

const store = configureStore({
  reducer: {
    rockets: Rocketslice,
    mission: MissionSice,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import Rocketslice from './rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    rockets: Rocketslice,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import { Rocket } from './rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    rockets: Rocket.reducer,
  },
});

export default store;

import { createSlice } from '@reduxjs/toolkit';
import { FetchData } from './Api';

const initialState = {
  rockets: [],
  status: true,
  error: null,
};

// Now I create a place to store rocket information
const Rocketslice = createSlice({
    name: 'Rockets',
    initialState,
    reducers: {
        reserveRocket: (state, { payload }) => {
          const rockets = state.rockets.map((rocket) => {
            if (rocket.id === payload) return { ...rocket, reserved: !rocket.reserved };
            return rocket;
          });
        },
      },
    extraReducers(builder) {
      builder
        // When I'm done looking up the rocket info and it's alright
        .addCase(FetchData.fulfilled, (state, { payload }) => {
          state.status = false; //  searching finished
          
          state.rockets = data;
        });
    },
});

export const { reserveRocket } = Rocketslice.actions;
export default Rocketslice.reducer;
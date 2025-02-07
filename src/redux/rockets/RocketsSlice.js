// Import the necessary dependencies
import { createSlice } from '@reduxjs/toolkit';
import { FetchData } from './Api';

// Initial Redux slice state
const initialState = {
  rockets: [], // Empty array to store rocket information
  status: 'loading', // Indicator to track if the search is in progress
  error: null, // Store any errors
};

// Create the "Rocketslice" slice
const Rocketslice = createSlice({
  name: 'Rockets', // Slice name
  initialState, // Initial state previously defined
  reducers: {
    // Action to reserve or cancel the reservation of a rocket
    reserveRocket: (state, { payload }) => {
    // Traverse the rocket array to update the reservation
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) return { ...rocket, reserved: !rocket.reserved };
        return rocket;
      });
      return { ...state, rockets }; // Return the new state with the updated rocket array
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchData.pending, (state) => ({
        ...state,
        status: 'loading',
        error: null,
      }))
      .addCase(FetchData.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        rockets: action.payload,
        error: null,
      }))
      .addCase(FetchData.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.payload,
      }));
  },
});

// Export created actions and reducer
export const { reserveRocket } = Rocketslice.actions; // Action to reserve a rocket
export default Rocketslice.reducer; // Global reducer to manage the state of the rockets

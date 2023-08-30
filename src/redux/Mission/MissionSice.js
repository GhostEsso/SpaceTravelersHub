import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch Mission
export const getMissions = createAsyncThunk('mission/getMission', async () => {
  const resp = await axios.get('https://api.spacexdata.com/v3/missions');
  return resp.data;
});

const initialState = {
  missionData: [],
  isLoading: true, // Indicator to track if the search is in progress
  error: null, // Store any errors
  joinedMissions: [],
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;

      const updatMission = state.missionData.map((mission) => (mission.mission_id === missionId
        ? { ...mission, reserved: true }
        : mission));

      return {
        ...state,
        missionData: updatMission,
        joinedMissions: [...state.joinedMissions, missionId],
      };
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;

      const index = state.joinedMissions.indexOf(missionId);
      if (index !== -1) {
        state.joinedMissions.splice(index, 1);
      }
      return {
        ...state,
        missionData: state.missionData.map((mission) => (mission.mission_id === missionId
          ? { ...mission, reserved: false }
          : mission)),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(getMissions.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        missionData: action.payload,
      }))
      .addCase(getMissions.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export const selectMission = (state) => state.mission;
export default missionSlice.reducer;

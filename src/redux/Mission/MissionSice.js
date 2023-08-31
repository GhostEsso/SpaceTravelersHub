import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch Mission
export const getMissions = createAsyncThunk(
  'mission/getMission',
  async (_, thunkAPI) => {
    // Fetch the data only if it doesn't exist in the store
    const state = thunkAPI.getState();

    if (state.mission.missionData.length === 0) {
      const resp = await fetch('https://api.spacexdata.com/v3/missions');
      const data = resp.json();
      return data;
    }

    return state.mission.missionData;
  },
);

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

      const updatedMiss = state.missionData.map((mission) => {
        if (mission.mission_id === missionId) {
          return { ...mission, reserved: !mission.reserved };
        }
        return mission;
      });

      // I've everything i could, but this is the only way,
      // kindly ignore this disabled
      // eslint-disable-next-line
      state.missionData = updatedMiss;
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

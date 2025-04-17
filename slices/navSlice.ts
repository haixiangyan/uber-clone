import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export interface NavState {
  origin?: {
    location?: {
      lng: number;
      lat: number;
    };
    description: string;
  };
  destination?: {
    location?: {
      lng: number;
      lat: number;
    };
    description: string;
  };
  travelTimeInfo?: string;
}

const initialState: NavState = {};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<NavState['origin']>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<NavState['destination']>) => {
      state.destination = action.payload;
    },
    setTravelTimeInfo: (state, action: PayloadAction<string>) => {
      state.travelTimeInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrigin, setTravelTimeInfo, setDestination } = navSlice.actions;

// Selectors
export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInfo = (state: RootState) => state.nav.travelTimeInfo;

export default navSlice.reducer;

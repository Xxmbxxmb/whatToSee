import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  colors: ImageColors;
  prevColors: ImageColors;
}

interface ImageColors {
  primary: string;
  secondary: string;
}

const initialState: InitialState = {
  colors: {
    primary: 'transparent',
    secondary: 'transparent',
  },
  prevColors: {
    primary: 'transparent',
    secondary: 'transparent',
  },
};

const gradientSlice = createSlice({
  name: 'gradient',
  initialState,
  reducers: {
    setColors: (state, action: PayloadAction<ImageColors>) => {
      state.colors.primary = action.payload.primary;
      state.colors.secondary = action.payload.secondary;
    },
    setPrevColors: (state, action: PayloadAction<ImageColors>) => {
      state.prevColors.primary = action.payload.primary;
      state.prevColors.secondary = action.payload.secondary;
    },
  },
});

export const { setColors, setPrevColors } = gradientSlice.actions;
export default gradientSlice.reducer;

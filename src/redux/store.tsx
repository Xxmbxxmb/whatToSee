import { configureStore } from '@reduxjs/toolkit';
import gradientSlice from './slices/gradient';

const store = configureStore({
  reducer: {
    gradient: gradientSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

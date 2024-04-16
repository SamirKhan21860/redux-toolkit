import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/counter";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

// Below two lines we need only when we using TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
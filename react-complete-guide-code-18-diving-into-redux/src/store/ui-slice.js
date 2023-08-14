import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  cartIsVisible: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialCart,
  reducers: {
    toggle(state, action) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalPrice += newItem.price;
      state.totalItems = state.items.length;
    },
    // removeItem: (state, action) => {},
  },
});
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;

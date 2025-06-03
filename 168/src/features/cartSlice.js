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
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalPrice += newItem.price;
      state.totalItems = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    },
    removeItem: (state, action) => {
      const IDToBeDeleted = action.payload.id;
      const itemToBeDeleted = state.items.find(
        (item) => item.id === IDToBeDeleted
      );
      if (itemToBeDeleted.quantity > 0) {
        itemToBeDeleted.quantity -= 1;
        state.totalPrice -= itemToBeDeleted.price;
        state.totalItems -= 1;
      }
    },
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialInfo = {
  name: "",
  add: "",
  phone: "",
};
const userInfoSlice = createSlice({
  name: "user",
  initialState: initialInfo,
  reducers: {
    addUser: (state, action) => {
      const { name, add, phone } = action.payload;
      state.name = name;
      state.add = add;
      state.phone = phone;
    },
  },
});
export const { addUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;

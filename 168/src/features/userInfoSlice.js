import { createSlice } from "@reduxjs/toolkit";

const initialInfo = {
  name: "",
  add: "",
  phone: "",
  deliveryTime: "",
  note: "",
};
const userInfoSlice = createSlice({
  name: "user",
  initialState: initialInfo,
  reducers: {
    addUser: (state, action) => {
      const { name, add, phone, deliveryTime, note } = action.payload;
      const formatDeliveryTime = (datetimeString) => {
        const date = new Date(datetimeString);
        return date.toLocaleString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
      };
      state.name = name;
      state.add = add;
      state.phone = phone;
      state.deliveryTime = formatDeliveryTime(deliveryTime);
      state.note = note;
    },
  },
});
export const { addUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;

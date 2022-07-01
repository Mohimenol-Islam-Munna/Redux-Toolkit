import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isError: false,
  data: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload.error;
      state.data = action.payload.data;
    },
  },
});

export const { getUsers } = usersSlice.actions;
export default usersSlice.reducer;

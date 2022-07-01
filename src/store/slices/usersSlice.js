// when create createAsyncThunk then dont use catch block. Then createAsyncThunk rejected block dont Work.
// In createAsyncThunk rejected block automatically we can handle error.
// If we use catch block then we have to use and return rejectWithValue from catch block.

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  isError: false,
  data: [],
  user: {
    isLoading: false,
    isError: false,
    data: {},
  },
};

export const singleUser = createAsyncThunk(
  "users/sigleUser",
  async (id, { rejectWithValue }) => {
    // try {
    let res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return res.data;
    // }
    // catch (err) {
    //   console.log("single user data fetch error6");
    //   return rejectWithValue(err);
    // }

    // return axios
    //   .get(`https://jsonplaceholder.typicode.com/usersd/${id}`)
    //   .then((res) => res.data);
    // .catch((err) => {
    //   console.log("single user data fetching error ::", err);
    // });
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(singleUser.pending, (state) => {
      state.user.isLoading = true;
    });

    builder.addCase(singleUser.fulfilled, (state, action) => {
      state.user.data = action.payload;
      state.user.isLoading = false;
    });

    builder.addCase(singleUser.rejected, (state, action) => {
      console.log("async thunk rejected :: ", action);
      state.user.isLoading = false;
      state.user.isError = true;
      state.user.data = {};
    });
  },
});

console.log("usersSlice ::", usersSlice);

export const { getUsers } = usersSlice.actions;
export default usersSlice.reducer;

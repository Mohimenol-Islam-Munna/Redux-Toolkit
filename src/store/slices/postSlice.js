import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: true,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts: (state, action) => {
      state.posts = action.payload.posts;
      state.loading = false;
    },
  },
});

export const { fetchPosts } = postsSlice.actions;
export default postsSlice.reducer;

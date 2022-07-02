import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import playersApi from "./services/playersApi";
import singlePlayerApi from "./services/singlePlayerApi";

const storeRtk = configureStore({
  reducer: {
    [playersApi.reducerPath]: playersApi.reducer,
    [singlePlayerApi.reducerPath]: singlePlayerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      playersApi.middleware,
      singlePlayerApi.middleware
    ),
});

setupListeners(storeRtk.dispatch);

export default storeRtk;

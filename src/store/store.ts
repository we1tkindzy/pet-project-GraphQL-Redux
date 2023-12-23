import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countries/countriesSlice";

const rootReducer = combineReducers({
  countries: countriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;

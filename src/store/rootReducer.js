import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import modal from "./modal/reducer";

const persistConfig = {
  key: "liveset.storage",
  storage,
  whitelist: [],
};

// const userPersistConfig = {
//   key: "user",
//   storage,
//   blacklist: [],
// };

export const rootReducer = combineReducers({
  modal,
  // user: persistReducer(userPersistConfig, user),
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

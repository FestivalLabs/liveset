import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import { persistedReducer } from "./rootReducer";

export default function configureStore(initialState = {}) {
  const middleware = [thunk];

  if (process.env.NODE_ENV === "development") {
    const logger = createLogger({});
    middleware.push(logger); // Logger must be the last item im middelware
  }

  let store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  let persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      const nextReducer = require("./rootReducer").persistedReducer;
      store.replaceReducer(nextReducer);
    });
  }

  window.persistor = persistor;

  return { store, persistor };
}

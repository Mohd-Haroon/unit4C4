// create store here
import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import { reducer } from "./reducer.js";
// import thunk from "redux-thunk";

const rootReducers = combineReducers({
  product: reducer,
});

const middleware = (store) => (next) => (action) => {
  // console.log(action);
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  next(action);
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(middleware)
  // other store enhancers if any
);
if (window.Cypress) {
  window.store = store;
}

export const store = createStore(rootReducers, enhancer);

// do not remove this code, its for testing purpose


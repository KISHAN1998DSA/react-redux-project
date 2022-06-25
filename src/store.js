import { createStore, applyMiddleware,compose } from "redux";
import rootReducer from "./services/reducer/index";
import thunk from "redux-thunk";

const middlewareCompose=compose(applyMiddleware(thunk))
const store = createStore(
  rootReducer,
  middlewareCompose
);

export default store;

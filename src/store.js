import { createStore, applyMiddleware,compose } from "redux";
import rootReducer from "./services/reducer/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewareCompose=compose(applyMiddleware(thunk))
const store = createStore(
  rootReducer,
  composeWithDevTools(
  middlewareCompose)
);

export default store;

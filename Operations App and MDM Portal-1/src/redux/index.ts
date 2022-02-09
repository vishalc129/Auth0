import { createStore } from "redux";
import { combineReducers } from "redux";

const initialState = {};
const configureStore = () => {
  const store = createStore(combineReducers({}), initialState);
  return store;
};
export default configureStore;

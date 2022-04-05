import {combineReducers, createStore} from "redux";
import carsReducer from "./carsReducer";
import userReducer from "./userReducer";

let reducers = combineReducers({
  cars: carsReducer,
  user: userReducer
})

let store = createStore(reducers)

window.store = store

export default store
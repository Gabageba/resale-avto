import {combineReducers, createStore} from "redux";
import carsReducer from "./carsReducer";
import userReducer from './userReducer';
import carSpecReducer from './carSpecReducer';

let reducers = combineReducers({
  cars: carsReducer,
  userData: userReducer,
  specifications: carSpecReducer
})

let store = createStore(reducers)

console.log(store.getState())

export default store
import {combineReducers, createStore} from "redux";
import carsReducer from "./carsReducer";
import userReducer from './userReducer';
import carSpecReducer from './carSpecReducer';
import currentCarPageReducer from './currentCarPageReducer';
import favoritesReducer from './favoritesReducer';
import showSettingReducer from './showSettingsReducer';

let reducers = combineReducers({
  cars: carsReducer,
  userData: userReducer,
  currentCar: currentCarPageReducer,
  specifications: carSpecReducer,
  favorite: favoritesReducer,
  showSetting: showSettingReducer
})

let store = createStore(reducers)

export default store
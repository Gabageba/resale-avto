import {combineReducers, createStore} from "redux";
import carsReducer from "./carsReducer";
import userReducer from './userReducer';
import carSpecReducer from './carSpecReducer';
import currentCarPageReducer from './currentCarPageReducer';
import favoritesReducer from './favoritesReducer';
import showSettingReducer from './showSettingsReducer';
import historyReducer from './historyReducer';
import applicationReducer from './applicationsReducer';

let reducers = combineReducers({
  cars: carsReducer,
  userData: userReducer,
  currentCar: currentCarPageReducer,
  specifications: carSpecReducer,
  favorite: favoritesReducer,
  showSetting: showSettingReducer,
  history: historyReducer,
  application: applicationReducer
})

let store = createStore(reducers)

export default store
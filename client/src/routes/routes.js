import {
  ADD_CAR_ROUTE, CAR_PAGE_ROUTE,
  CATALOG_ROUTE,
  COMMISSION_ROUTE,
  DETAILING_ROUTE, FAVORITE_CAR_ROUTE, HISTORY_CAR_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE, PROFILE_ROUTE,
  REGISTRATION_ROUTE,
  TRADEIN_ROUTE
} from '../utils/const';
import Main from "../pages/Main/Main";
import Catalog from "../pages/Catalog/Catalog";
import TradeIn from "../pages/TradeIn/TradeIn";
import Commission from "../pages/Commission/Commission";
import Detailing from "../pages/Detailing/Detailing";
import Auth from '../pages/Auth/Auth';
import MyProfile from '../pages/MyProfile/MyProfile';
import AddCar from '../pages/AddCar/AddCar';
import CarPage from '../pages/CarPage/CarPage';
import Favorite from '../pages/Favorite/Favorite';
import History from '../pages/History/History';

export const authRoutes = [
  {
    path: PROFILE_ROUTE,
    element: <MyProfile/>
  },
  {
    path: ADD_CAR_ROUTE,
    element: <AddCar/>
  },
  {
    path: FAVORITE_CAR_ROUTE,
    element: <Favorite/>
  },
  {
    path: HISTORY_CAR_ROUTE,
    element: <History/>
  },
  ]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    element: <Main/>
  },
  {
    path: CATALOG_ROUTE,
    element: <Catalog/>
  },
  {
    path: TRADEIN_ROUTE,
    element: <TradeIn/>
  },
  {
    path: COMMISSION_ROUTE,
    element: <Commission/>
  },
  {
    path: DETAILING_ROUTE,
    element: <Detailing/>
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth/>
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth/>
  },
  {
    path: CAR_PAGE_ROUTE + '/:id',
    element: <CarPage/>
  }
]
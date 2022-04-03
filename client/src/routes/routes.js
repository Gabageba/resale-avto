import {CATALOG_ROUTE, COMMISSION_ROUTE, DETAILING_ROUTE, MAIN_ROUTE, TRADEIN_ROUTE} from "../utils/const";
import Main from "../pages/Main/Main";
import Catalog from "../pages/Catalog/Catalog";
import TradeIn from "../pages/TradeIn/TradeIn";
import Commission from "../pages/Commission/Commission";
import Detailing from "../pages/Detailing/Detailing";

export const authRoutes = [

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
  }
]
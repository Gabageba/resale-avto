const SET_CARS = 'SET_CARS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_DEL = 'SET_IS_DEL'
const SET_LIMIT = 'SET_LIMIT'
const SET_CAR_RECOMMENDATION = 'SET_CAR_RECOMMENDATION'

let initialState = {
  carsData: [],
  carRecommendation: [],
  totalCount: 0,
  currentPage: 1,
  limit: 9,
  isDel: false
}

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.page}
    case SET_CARS:
      return {...state, carsData: action.cars}
    case SET_IS_DEL:
      return {...state, isDel: action.bool}
    case SET_TOTAL_COUNT:
      return {...state, totalCount: action.totalCount}
    case SET_LIMIT:
      return {...state, limit: action.lim}
    case SET_CAR_RECOMMENDATION:
      return {...state, carRecommendation: action.rec}
    default:
      return state
  }
}

export const setCarsAC = (cars) => ({type: SET_CARS, cars})
export const setIsDel = (bool) => ({type: SET_IS_DEL, bool})
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page})
export const setLimitAC = (lim) => ({type: SET_LIMIT, lim})
export const setRecommendation = (rec) => ({type: SET_CAR_RECOMMENDATION, rec})

export default carsReducer
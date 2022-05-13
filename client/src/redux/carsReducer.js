const SET_CARS = 'SET_CARS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_DEL = 'SET_IS_DEL'

let initialState = {
  carsData: [],
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
    default:
      return state
  }
}

export const setCarsAC = (cars) => ({type: SET_CARS, cars})
export const setIsDel = (bool) => ({type: SET_IS_DEL, bool})
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page})

export default carsReducer
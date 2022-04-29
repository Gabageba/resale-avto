const SET_CARS = 'SET_CARS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

let initialState = {
  carsData: [],
  totalCount: 0
}

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARS:
      return {...state, carsData: action.cars}
    case SET_TOTAL_COUNT:
      return {...state, totalCount: action.totalCount}
    default:
      return state
  }
}

export const setCarsAC = (cars) => ({type: SET_CARS, cars})
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})

export default carsReducer
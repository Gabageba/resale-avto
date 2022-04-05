const SET_CARS = 'SET_CARS'
// const SET_BRANDS = 'SET_BRANDS'
// const SET_MODELS = 'SET_MODELS'
// const SET_PAGE = 'SET_PAGE'
// const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
// const GET_CARS = 'GET_CARS'
// const GET_BRANDS = 'GET_BRANDS'
// const GET_MODELS = 'GET_MODELS'
// const GET_PAGE = 'GET_PAGE'
// const GET_TOTAL_COUNT = 'GET_TOTAL_COUNT'
// const GET_LIMIT = 'GET_LIMIT'




let initialState = {
  carsData: [],
  brandsData: [],
  modelsData: [],
  page: 1,
  totalCount: 0,
  limit: 3
}

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARS:
      return {...state, carsData: [...state.carsData, ...action.carsData]}
    default:
      return state
  }
}

export const setCarsAC = (carsData) => ({type: SET_CARS, carsData })

export default carsReducer
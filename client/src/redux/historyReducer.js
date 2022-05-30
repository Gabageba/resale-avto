const SET_HISTORY = 'SET_HISTORY'
const SET_HISTORY_COUNT = 'SET_HISTORY_COUNT'
const SET_HISTORY_PAGE = 'SET_HISTORY_PAGE'
const SET_IS_DEL = 'SET_IS_DEL'

let initialState = {
  historyData: [],
  totalCount: 0,
  currentPage: 1,
  limit: 6,
  isDel: false
}

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY_PAGE:
      return {...state, currentPage: action.page}
    case SET_HISTORY:
      return {...state, historyData: action.history}
    case SET_IS_DEL:
      return {...state, isDel: action.bool}
    case SET_HISTORY_COUNT:
      return {...state, totalCount: action.totalCount}
    default:
      return state
  }
}

export const setHistoryAC = (history) => ({type: SET_HISTORY, history})
export const setIsDelHistAC = (bool) => ({type: SET_IS_DEL, bool})
export const setTotalCountHistAC = (totalCount) => ({type: SET_HISTORY_COUNT, totalCount})
export const setCurrentPageHistAC = (page) => ({type: SET_HISTORY_PAGE, page})

export default historyReducer
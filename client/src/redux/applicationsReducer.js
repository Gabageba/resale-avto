const SET_APPLICATION_TYPES = 'SET_APPLICATION_TYPES'
const SET_SELECTED_APPLICATION_TYPE = 'SET_SELECTED_APPLICATION_TYPE'
const SET_APPLICATION = 'SET_APPLICATION'
const SET_APPLICATION_COUNT = 'SET_APPLICATION_COUNT'
const SET_APPLICATION_PAGE = 'SET_APPLICATION_PAGE'

let initialState = {
  applications: [],
  applicationTypes: [],
  selectedApplicationType: '',
  totalCount: 0,
  currentPage: 1,
  limit: 6,
}

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPLICATION:
      return {...state, applications: action.applications}
    case SET_APPLICATION_TYPES:
      return {...state, applicationTypes: action.types}
    case SET_SELECTED_APPLICATION_TYPE:
      return {...state, selectedApplicationType: action.t}
    case SET_APPLICATION_PAGE:
      return {...state, currentPage: action.page}
    case SET_APPLICATION_COUNT:
      return {...state, totalCount: action.totalCount}
    default:
      return state
  }
}

export const setApplicationTypesAC = (types) => ({type: SET_APPLICATION_TYPES, types})
export const setApplicationsAC = (applications) => ({type: SET_APPLICATION, applications})
export const setSelectedApplicationTypeAC = (t) => ({type: SET_SELECTED_APPLICATION_TYPE, t})
export const setTotalCountApplicationAC = (totalCount) => ({type: SET_APPLICATION_COUNT, totalCount})
export const setCurrentPageApplicationAC = (page) => ({type: SET_APPLICATION_PAGE, page})

export default applicationReducer
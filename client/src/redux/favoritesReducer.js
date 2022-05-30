const SET_FAVORITES = 'SET_FAVORITES'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_CURRENT_FAVORITE = 'SET_CURRENT_FAVORITE'
const SET_IS_DEL = 'SET_IS_DEL'

let initialState = {
  currentFavorite: null,
  favoritesData: [],
  totalCount: 0,
  currentPage: 1,
  limit: 6,
  isDel: false
}

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.page}
    case SET_FAVORITES:
      return {...state, favoritesData: action.favorites}
    case SET_IS_DEL:
      return {...state, isDel: action.bool}
    case SET_TOTAL_COUNT:
      return {...state, totalCount: action.totalCount}
    case SET_CURRENT_FAVORITE:
      return {...state, currentFavorite: action.currentFav}
    default:
      return state
  }
}

export const setFavoritesAC = (favorites) => ({type: SET_FAVORITES, favorites})
export const setIsDelFavAC = (bool) => ({type: SET_IS_DEL, bool})
export const setTotalCountFavAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const setCurrentPageFavAC = (page) => ({type: SET_CURRENT_PAGE, page})
export const setCurrentFavoriteAC = (currentFav) => ({type: SET_CURRENT_FAVORITE, currentFav})

export default favoritesReducer
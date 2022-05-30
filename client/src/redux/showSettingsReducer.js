const SET_SELECTED_SORT = 'SET_SELECTED_SORT'
const SET_SELECTED_VIEW = 'SET_SELECTED_VIEW'

let initialState = {
  sortOptions : [
    {id: 1, name: 'PriceDown', title: 'Цена', icon: 'expand_more'},
    {id: 2, name: 'PriceUp', title: 'Цена', icon: 'expand_less'},
    {id: 3, name: 'TimeDown', title: 'Добавлено', icon: 'expand_more'},
    {id: 4, name: 'TimeUp', title: 'Добавлено', icon: 'expand_less'},
    {id: 5, name: 'YearDown', title: 'Год', icon: 'expand_more'},
    {id: 6, name: 'YearUp', title: 'Год', icon: 'expand_less'},
  ],
  selectedSort:  {id: 3, name: 'TimeDown', title: 'Добавлено', icon: 'expand_more'},
  viewOptions: [
    {id: 1, name: 'Grid', title: 'Плитка', icon: 'grid_view'},
    {id: 2, name: 'List', title: 'Список', icon: 'view_agenda'}
  ],
  selectedView: {id: 1, name: 'Grid', title: 'Плитка', icon: 'grid_view'},
}

const showSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SORT:
      return {...state, selectedSort: action.sort}
    case SET_SELECTED_VIEW:
      return {...state, selectedView: action.view}
    default:
      return state
  }
}

export const setSelectedSortAC = (sort) => ({type: SET_SELECTED_SORT, sort})
export const setSelectedViewAC = (view) => ({type: SET_SELECTED_VIEW, view})


export default showSettingReducer
const SET_SELECTED_SORT = 'SET_SELECTED_SORT'

let initialState = {
  sortOptions : [
    {id: 1, name: 'PriceDown', title: 'Цена', icon: 'expand_more'},
    {id: 2, name: 'PriceUp', title: 'Цена', icon: 'expand_less'},
    {id: 3, name: 'TimeDown', title: 'Время добавления', icon: 'expand_more'},
    {id: 4, name: 'TimeUp', title: 'Время добавления', icon: 'expand_less'},
    {id: 5, name: 'YearDown', title: 'Год', icon: 'expand_more'},
    {id: 6, name: 'YearUp', title: 'Год', icon: 'expand_less'},
  ],
  selectedSort:  {id: 3, name: 'TimeDown', title: 'Время добавления', icon: 'expand_more'},
}

const showSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SORT:
      return {...state, selectedSort: action.sort}
    default:
      return state
  }
}

export const setSelectedSortAC = (sort) => ({type: SET_SELECTED_SORT, sort})


export default showSettingReducer
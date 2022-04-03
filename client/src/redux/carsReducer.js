let initialState = {
  carsData: [
    {
      id: 1, name: 'Honda Civic', img: 'https://i.imgur.com/BigEvXA.jpeg', year: 2020, price: '2 000 000 ₽',
      mileage: '25 000 км', owners: '1'
    },
  ]
}

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default carsReducer
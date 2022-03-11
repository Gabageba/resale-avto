// import {createStore} from 'redux';

let store = {
  carCards: {
    car: [
      {
        id: 1, name: 'Honda Civic', img: 'https://i.imgur.com/BigEvXA.jpeg', year: 2020, price: '2 000 000 ₽',
        mileage: '25 000 км', owners: '1'
      },
      {
        id: 2, name: 'Porshe 911', img: 'https://i.imgur.com/BZ7rswF.png', year: 2016, price: '13 000 000 ₽',
        mileage: '14 200 км', owners: '1'
      },
      {
        id: 3, name: 'Rolls-Royce Wraith', img: 'https://i.imgur.com/dIBghJl.png', year: 2014, price: '14 000 000 ₽',
        mileage: '46 170 км', owners: '3'
      }

    ]
  }
}

export default store
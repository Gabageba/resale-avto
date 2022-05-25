import {$authHost, $host} from './index';

export const addFavourite = async (carId, userId) => {
  const {data} = await $authHost.post('/api/favourite', carId, userId)
  return data
}

export const fetchFavourite = async (userId) => {
  const {data} = await $host.get('api/favourite', {params: {userId}})
  return data
}
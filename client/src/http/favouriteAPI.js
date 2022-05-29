import {$authHost} from './index';

export const addFavourite = async (carId, userId) => {
  const {data} = await $authHost.post('/api/favourite', {carId, userId})
  return data
}

export const fetchFavourite = async (userId, page, limit,) => {
  const {data} = await $authHost.get('api/favourite', {params: {userId, page, limit,}})
  return data
}

export const checkFavorite = async (userId, carId) => {
  const {data} = await $authHost.get('api/favourite/check', {params: {userId, carId}})
  return data
}

export const deleteFavorite = async (userId, carId) => {
  const {data} = await $authHost.delete('api/favourite', {params: {userId, carId}})
  return data
}

export const deleteAndFetchFavorite = async (userId, carId, page, limit) => {
  await $authHost.delete('api/favourite', {params: {userId, carId}})
  const {data} = await $authHost.get('api/favourite', {params: {userId, page, limit,}})
  return data
}
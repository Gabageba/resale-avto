import {$authHost} from './index';

export const addInHistory = async (carId, userId) => {
  const {data} = await $authHost.post('/api/history', {carId, userId})
  return data
}

export const fetchHistory = async (userId, page, limit,) => {
  const {data} = await $authHost.get('api/history', {params: {userId, page, limit,}})
  return data
}

export const deleteOneInHistory = async (userId, carId, limit, page) => {
  const {data} = await $authHost.delete('api/history', {params: {userId, carId, limit, page}})
  return data
}

export const deleteAllHistory = async (userId) => {
  const {data} = await $authHost.delete('api/history/deleteAll', {params: {userId}})
  return data
}

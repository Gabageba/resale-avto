import {$authHost, $host} from './index';

export const createApplication = async (year, millage, phoneNumber, brand, model, price, type) => {
  const {data} = await $host.post('/api/application', {year, millage, phoneNumber, brand, model, price, type})
  return data
}

export const fetchApplicationTypes = async () => {
  const {data} = await $authHost.get('api/application/type' )
  return data
}

export const fetchApplications = async (type, limit, page) => {
  const {data} = await $authHost.get('api/application/', {params: {type, limit, page}})
  return data
}

export const deleteApplication = async (id, limit, page) => {
  const {data} = await $authHost.delete('api/application', {params: {id, limit, page}})
  return data
}
import {$host} from "./index";

export const fetchBrands = async () => {
  const {data} = await $host.get('/api/brand')
  return data
}

export const fetchModels = async () => {
  const {data} = await $host.get('/api/model')
  return data
}

export const fetchCars = async (brandId, modelId, page, limit) => {
  const {data} = await $host.get('/api/car', {params: {
      brandId, modelId, page, limit
    }})
  return data
}

export const fetchOneCar = async (id) => {
  const {data} = await $host.get('api/car/' + id)
  return data
}
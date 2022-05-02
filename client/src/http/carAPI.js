import {$authHost, $host} from './index';

export const createBrand = async (brand) => {
  const {data} = await $authHost.post('')
  return data
}

export const fetchModels = async () => {
  const {data} = await $host.get('api/model')
  return data
}

export const fetchBrands = async () => {
  const {data} = await $host.get('api/brand')
  return data
}

export const fetchDriveUnits = async () => {
  const {data} = await $host.get('api/driveUnit')
  return data
}

export const fetchBodyTypes = async () => {
  const {data} = await $host.get('api/bodyType')
  return data
}

export const fetchSteeringWheels = async () => {
  const {data} = await $host.get('api/steeringWheel')
  return data
}

export const fetchColors = async () => {
  const {data} = await $host.get('api/color')
  return data
}

export const fetchCars = async (page,
                                limit,
                                bodyTypeId,
                                brandId,
                                modelId,
                                colorId,
                                driveUnitId,
                                steeringWheelId
                                ) => {
const {data} = await $host.get('api/car', {params: {
    bodyTypeId,
    brandId,
    modelId,
    colorId,
    driveUnitId,
    steeringWheelId,
    page,
    limit
  }})
  return data
}
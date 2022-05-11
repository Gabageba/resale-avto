import {$authHost, $host} from './index';
import axios from 'axios';

export const createBrand = async (brand) => {
  const {data} = await $authHost.post('/api/brand', brand)
  return data
}

export const createModel = async (model) => {
  const {data} = await $authHost.post('/api/model', model)
  return data
}

export const createBodyType = async (bodyType) => {
  const {data} = await $authHost.post('/api/bodyType', bodyType)
  return data
}

export const createDriveUnit = async (driveUnit) => {
  const {data} = await $authHost.post('/api/driveUnit', driveUnit)
  return data
}

export const createColor = async (color) => {
  const {data} = await $authHost.post('/api/color', color)
  return data
}

export const createSteeringWheel = async (steeringWheel) => {
  const {data} = await $authHost.post('/api/steeringWheel', steeringWheel)
  return data
}
export const createTransmission = async (transmission) => {
  const {data} = await $authHost.post('/api/transmission', transmission)
  return data
}
export const createCar = async (car) => {
  const {data} = await $authHost.post('/api/car', car)
  return data
}

export const fetchModels = async (brandId) => {
  const {data} = await $host.get('api/model', {params: {brandId}})
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

export const fetchTransmission = async () => {
  const {data} = await $host.get('api/transmission')
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
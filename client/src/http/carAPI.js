import {$authHost, $host} from './index';

export const createBrand = async (brand) => {
  const {data} = await $authHost.post('')
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
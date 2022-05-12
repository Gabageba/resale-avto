const SET_BODY_TYPES = 'SET_BODY_TYPES'
const SET_BRANDS = 'SET_BRANDS'
const SET_COLORS = 'SET_COLORS'
const SET_DRIVE_UNITS = 'SET_DRIVE_UNITS'
const SET_MODELS = 'SET_MODELS'
const SET_STEERING_WHEELS = 'SET_STEERING_WHEELS'
const SET_TRANSMISSIONS = 'SET_TRANSMISSIONS'

const SET_FILTER_MODELS = 'SET_FILTER_MODEL'

const SET_SELECTED_BODY_TYPE = 'SET_SELECTED_BODY_TYPE'
const SET_SELECTED_BRAND = 'SET_SELECTED_BRAND'
const SET_SELECTED_COLOR = 'SET_SELECTED_COLOR'
const SET_SELECTED_DRIVE_UNIT = 'SET_SELECTED_DRIVE_UNIT'
const SET_SELECTED_MODEL = 'SET_SELECTED_MODEL'
const SET_SELECTED_STEERING_WHEEL = 'SET_SELECTED_STEERING_WHEEL'
const SET_SELECTED_TRANSMISSION = 'SET_SELECTED_TRANSMISSION'
const SET_SELECTED_YEAR = 'SET_SELECTED_YEAR'
const SET_SELECTED_MILLAGE = 'SET_SELECTED_MILLAGE'
const SET_SELECTED_POWER = 'SET_SELECTED_POWER'
const SET_SELECTED_PRICE = 'SET_SELECTED_PRICE'
const SET_SELECTED_OWNERS = 'SET_SELECTED_OWNERS'
const SET_SELECTED_FILE = 'SET_SELECTED_FILE'
const SET_SELECTED_DESCRIPTION = 'SET_SELECTED_DESCRIPTION'

let initialState = {
  bodyTypes: [],
  brands: [
    {
      id: '',
      name: 'asd'
    }
  ],
  colors: [],
  driveUnits: [],
  models: [
    {
      id: '',
      name: 'asd'
    }
  ],
  filterModels: [],
  steeringWheels: [],
  transmissions: [],

  selectedBodyType: '',
  selectedBrand: '',
  selectedColor: '',
  selectedDriveUnit: '',
  selectedModel: '',
  selectedSteeringWheel: '',
  selectedTransmission: '',
  selectedYear: '',
  selectedMillage: '',
  selectedPower: '',
  selectedPrice: '',
  selectedOwners: '',
  selectedFile: '',
  selectedDescription: '',
}

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BODY_TYPES:
      return {...state, bodyTypes: action.bodyTypes}
    case SET_SELECTED_BODY_TYPE:
      return {...state, selectedBodyType: action.selectedBodyType}
    case SET_BRANDS:
      return {...state, brands: action.brands}
    case SET_SELECTED_BRAND:
      return {...state, selectedBrand: action.selectedBrand}
    case SET_COLORS:
      return {...state, colors: action.colors}
    case SET_SELECTED_COLOR:
      return {...state, selectedColor: action.selectedColor}
    case SET_DRIVE_UNITS:
      return {...state, driveUnits: action.driveUnits}
    case SET_SELECTED_DRIVE_UNIT:
      return {...state, selectedDriveUnit: action.selectedDriveUnit}

    case SET_FILTER_MODELS:
      return {...state, filterModels: action.filterModels}
    case SET_MODELS:
      return {...state, models: action.models}
    case SET_SELECTED_MODEL:
      return {...state, selectedModel: action.selectedModel}
    case SET_STEERING_WHEELS:
      return {...state, steeringWheels: action.steeringWheels}
    case SET_SELECTED_STEERING_WHEEL:
      return {...state, selectedSteeringWheel: action.selectedSteeringWheel}
    case SET_TRANSMISSIONS:
      return {...state, transmissions: action.transmissions}
    case SET_SELECTED_TRANSMISSION:
      return {...state, selectedTransmission: action.selectedTransmission}
    case SET_SELECTED_YEAR:
      return {...state, selectedYear: action.selectedYear}
    case SET_SELECTED_POWER:
      return {...state, selectedPower: action.selectedPower}
    case SET_SELECTED_MILLAGE:
      return {...state, selectedMillage: action.selectedMillage}
    case SET_SELECTED_PRICE:
      return {...state, selectedPrice: action.selectedPrice}
    case SET_SELECTED_OWNERS:
      return {...state, selectedOwners: action.selectedOwners}
    case SET_SELECTED_FILE:
      return {...state, selectedFile: action.selectedFile}
    case SET_SELECTED_DESCRIPTION:
      return {...state, selectedDescription: action.selectedDescription}
    default:
      return state
  }
}

export const setBodyTypesAC = (bodyTypes) => ({type: SET_BODY_TYPES, bodyTypes})
export const setSelectedBodyTypeAC = (selectedBodyType) => ({type: SET_SELECTED_BODY_TYPE, selectedBodyType})
export const setBrandsAC = (brands) => ({type: SET_BRANDS, brands})
export const setSelectedBrandAC = (selectedBrand) => ({type: SET_SELECTED_BRAND, selectedBrand})
export const setColorsAC = (colors) => ({type: SET_COLORS, colors})
export const setSelectedColorAC = (selectedColor) => ({type: SET_SELECTED_COLOR, selectedColor})
export const setModelsAC = (models) => ({type: SET_MODELS, models})
export const setFilterModels = (filterModels) => ({type: SET_FILTER_MODELS, filterModels})

export const setSelectedModelsAC = (selectedModel) => ({type: SET_SELECTED_MODEL, selectedModel})
export const setDriveUnitsAC = (driveUnits) => ({type: SET_DRIVE_UNITS, driveUnits})
export const setSelectedDriveUnitAC = (selectedDriveUnit) => ({type: SET_SELECTED_DRIVE_UNIT, selectedDriveUnit})
export const setSteeringWheelsAC = (steeringWheels) => ({type: SET_STEERING_WHEELS, steeringWheels})
export const setSelectedSteeringWheelAC = (selectedSteeringWheel) => ({type: SET_SELECTED_STEERING_WHEEL, selectedSteeringWheel})
export const setTransmissionsAC = (transmissions) => ({type: SET_TRANSMISSIONS, transmissions})
export const setSelectedTransmissionAC = (selectedTransmission) => ({type: SET_SELECTED_TRANSMISSION, selectedTransmission})
export const setSelectedYearAC = (selectedYear) => ({type: SET_SELECTED_YEAR, selectedYear})
export const setSelectedPowerAC = (selectedPower) => ({type: SET_SELECTED_POWER, selectedPower})
export const setSelectedMillageAC = (selectedMillage) => ({type: SET_SELECTED_MILLAGE, selectedMillage})
export const setSelectedPriceAC = (selectedPrice) => ({type: SET_SELECTED_PRICE, selectedPrice})
export const setSelectedOwnersAC = (selectedOwners) => ({type: SET_SELECTED_OWNERS, selectedOwners})
export const setSelectedFileAC = (selectedFile) => ({type: SET_SELECTED_FILE, selectedFile})
export const setSelectedDescriptionAC = (selectedDescription) => ({type: SET_SELECTED_DESCRIPTION, selectedDescription})


export default carsReducer
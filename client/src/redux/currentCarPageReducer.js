const SET_BODY_TYPE = 'SET_BODY_TYPE'
const SET_BRAND = 'SET_BRAND'
const SET_COLOR = 'SET_COLOR'
const SET_DRIVE_UNIT = 'SET_DRIVE_UNIT'
const SET_MODEL = 'SET_MODEL'
const SET_STEERING_WHEEL = 'SET_STEERING_WHEEL'
const SET_TRANSMISSION = 'SET_TRANSMISSION'


let initialState = {
  bodyType: [{name: ''}],
  brand: [{name: ''}],
  model: [{name: ''}],
  color: [{name: ''}],
  driveUnit: [{name: ''}],
  steeringWheel: [{name: ''}],
  transmission: [{name: ''}],
}

const currentCarPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BODY_TYPE:
      return {...state, bodyType: action.bodyType}
    case SET_BRAND:
      return {...state, brand: action.brand}
    case SET_COLOR:
      return {...state, color: action.color}
    case SET_DRIVE_UNIT:
      return {...state, driveUnit: action.driveUnit}
    case SET_MODEL:
      return {...state, model: action.model}
    case SET_STEERING_WHEEL:
      return {...state, steeringWheel: action.steeringWheel}
    case SET_TRANSMISSION:
      return {...state, transmission: action.transmission}
    default:
      return state
  }
}

export const setBodyTypeAC = (bodyType) => ({type: SET_BODY_TYPE, bodyType})
export const setBrandAC = (brand) => ({type: SET_BRAND, brand})
export const setColorAC = (color) => ({type: SET_COLOR, color})
export const setModelAC = (model) => ({type: SET_MODEL, model})
export const setDriveUnitAC = (driveUnit) => ({type: SET_DRIVE_UNIT, driveUnit})
export const setSteeringWheelAC = (steeringWheel) => ({type: SET_STEERING_WHEEL, steeringWheel})
export const setTransmissionAC = (transmission) => ({type: SET_TRANSMISSION, transmission})



export default currentCarPageReducer
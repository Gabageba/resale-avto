import jwt_decode from "jwt-decode";
import {$authHost, $host} from './index';

export const registration = async (email, password, name) => {
  const {data} = await $host.post('api/user/registration', {email, password, role: 'USER', name})
  localStorage.setItem('token', data.token)
  return {
    mainInfo: jwt_decode(data.token),
    additionalInfo: data.userInfo
  }
}

export const login = async (email, password) => {
  const {data} = await $host.post('api/user/login', {email, password})
  localStorage.setItem('token', data.token)
  return {
    mainInfo: jwt_decode(data.token),
    additionalInfo: data.userInfo
  }

}

export const check = async () => {
  const {data} = await $authHost.get('api/user/auth' )
  localStorage.setItem('token', data.token)
  console.log({
    mainInfo: jwt_decode(data.token),
    additionalInfo: data.userInfo
  })
  return {
    mainInfo: jwt_decode(data.token),
    additionalInfo: data.userInfo
  }
}

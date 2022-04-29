import jwt_decode from "jwt-decode";
import {$authHost, $host} from './index';

export const registration = async (email, password, name) => {
  const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN', name})
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const login = async (email, password) => {
  debugger
  const {data} = await $host.post('api/user/login', {email, password})
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const check = async () => {
  debugger
  const {data} = await $authHost.get('api/user/auth' )
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

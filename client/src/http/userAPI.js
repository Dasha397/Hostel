import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (login, password) => {
	const { data } = await $host.post('api/user/registration', { login, password })
	return jwt_decode(data.token)
}

export const login = async (login, password) => {
	const { data } = await $host.post('api/user/login', { login, password })
	return jwt_decode(data.token)
}

export const check = async () => {
	const response = await $authHost.get('api/auth/registration')
	return response
}
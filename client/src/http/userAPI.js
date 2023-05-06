import { $authHost, $host } from "./index.js";
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

export const createStudent = async (name, surname, patronymic, gender, group, phone, user) => {
	//console.log(name, surname, patronymic, gender, group, phone, user)
	const response = await $host.post('api/student', { name, surname, patronymic, gender, group, phone, user })
	return response
}

export const createRequest = async (application_date, student) => {
	return await $host.post('api/request', { application_date, student })
}

// export const getAllRequests = async () => {
// 	return await $host.get('api/request')
// }

// export const getAllInformations = async () => {
// 	return await $host.get('api/accommodation')
// }
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
	return response.data
}

export const findStudent = async (user) => {
	const response = await $host.get(`api/student/${user._user.id}`)
	return response.data
}

export const getAllStudents = async () => {
	const response = await $host.get(`api/student`)
	return response.data
}

export const findRequest = async (student) => {
	const response = await $host.get(`api/request/${student.id}`)
	return response.data
}

export const getAllRequests = async () => {
	const response = await $host.get(`api/request`)
	return response.data
}

export const findAccommodation = async (request) => {
	const response = await $host.get(`api/accommodation/${request.id}`)
	return response.data
}

export const createRequest = async (student) => {
	const request = await $host.post('api/request', { student })
	//localStorage.setItem('request', JSON.stringify(request.data))
	return request.data
}

export const createAccommodation = async (request) => {
	const accommodation = await $host.post('api/accommodation', { request })
	//localStorage.setItem('accommodation', JSON.stringify(accommodation.data))
	return accommodation.data
}

export const getAllAccommodations = async () => {
	const response = await $host.get('api/accommodation')
	return response.data
}

export const getStatus = async (accommodation) => {
	return await $host.get('api/status/' + accommodation.statusId)
}

export const getAllStatuses = async () => {
	const response = await $host.get('api/status/')
	return response.data
}

export const getAllBenefits = async (student) => {
	const data = await $host.get('api/benefit/' + student.id)
	const result = await $host.get('api/')
}

export const getAllPenalties = async (student) => {
	const response = await $host.get('api/penalty/' + student.id)
	return response.data
}
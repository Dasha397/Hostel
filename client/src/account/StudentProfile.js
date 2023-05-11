import { makeAutoObservable } from "mobx";


export default class StudentProfile {
	constructor() {
		this._student = {}

		this._request = {}

		this._accommodation = {}


		makeAutoObservable(this) // теперь mobx следит за изменениями и рендерит
	}

	setStudent(student) {
		this._student = student
	}

	setRequest(request) {
		this._request = request
	}

	setAccommodation(accommodation) {
		this._accommodation = accommodation
	}
}
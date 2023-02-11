import { makeAutoObservable } from "mobx";

export default class Profile {
	constructor() {
		this._isAuth = false
		this._user = {
			id: 1,
			login: "user",
			password: "user",
			role: "USER",
		}
		makeAutoObservable(this) // теперь mobx следит за изменениями и рендерит
	}

	setIsAuth(bool) {
		this._isAuth = bool
	}

	setUser(user) {
		this._user = user
	}

	get isAuth() { // компьютед функции, вызываются если значение было изменено, оптимизация
		return this._isAuth
	}

	get user() {
		return this._user
	}
}
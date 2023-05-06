import { makeAutoObservable } from "mobx";

export default class Profile {
	constructor() {
		this._isAuth = true
		this._user = {
			id: 1,
			login: "user",
			password: "user",
			role: "USER",
		}
		//makeAutoObservable(this) // теперь mobx следит за изменениями и рендерит
	}

	setIsAuth(bool) {
		this._isAuth = bool
	}

	setUser(user) {
		this._user = user
	}

	getisAuth() { // компьютед функции, вызываются если значение было изменено, оптимизация
		return this._isAuth
	}

	getuser() {
		return this._user
	}
}
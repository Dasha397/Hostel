import { makeAutoObservable } from "mobx";

export default class UserProfile {
	constructor() {
	}

	setAuth(bool) {
		this._isAuth = bool
	}

	setUser(user) {
		this._user = user
	}

	get isAuth() {
		return this._isAuth
	}

	get user() {
		return this._user
	}
}
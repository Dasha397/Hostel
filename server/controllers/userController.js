const { User } = require('../models/models')
const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, login, role) => {
	return jwt.sign(
		{ id, login, role },
		process.env.SECRET_KEY,
		{ expiresIn: '24h' }
	)
}

class UserController {
	// work
	async registration(req, res, next) {
		//console.log(req.body)
		const { login, password, role } = req.body

		if (!login || !password) {
			return next(ApiError.badRequest('Некорректный логин или пароль'))
		}

		const candidate = await User.findOne({ where: { login } })
		if (candidate) {
			return next(ApiError.badRequest('Пользователь с таким именем уже есть'))
		}

		const hashPassword = await bcrypt.hash(password, 5) // 2 param - how many count hash
		const user = await User.create({ login, role, password: hashPassword })
		const token = generateJwt(user.id, user.login, user.role)

		return res.json({ token })
	}

	// work
	async login(req, res, next) {
		console.log(req);
		const { login, password } = req.body
		const user = await User.findOne({ where: { login } })
		if (!user) {
			return next(ApiError.badRequest('Пользователь с таким именем не существует'))
		}
		let comparePassword = bcrypt.compareSync(password, user.password)
		if (!comparePassword) {
			return next(ApiError.badRequest('Неверный пароль'))
		}
		const token = generateJwt(user.id, user.login, user.role)
		return res.json({ token })
	}

	async check(req, res, next) { // check registration
		const token = generateJwt(req.user.id, req.user.login, req.user.role)
		return res.json({ token })
	}
}

module.exports = new UserController()
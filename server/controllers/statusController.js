const { Status } = require('../models/models')
const ApiError = require('../error/ApiError')

class StatusController {
	async create(req, res, next) {
		try {
			const { type } = req.body
			const status = await Status.create({ type })
			return res.json(status)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async getAll(req, res) {
		const statuses = await Status.findAll()
		return res.json(statuses)
	}

	async getOne(req, res) {
		const status = await Status.findOne({ where: { id: req.params.id } })
		return res.json(status)
	}
}

module.exports = new StatusController()
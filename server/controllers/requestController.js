const { Request } = require('../models/models')
const ApiError = require('../error/ApiError')

class RequestController {
	async create(req, res, next) {
		try {
			const { application_date, studentId } = req.body
			const request = await Request.create({ application_date, studentId })
			return res.json(request)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async getAll(req, res) {
		const requests = await Request.findAll()
		return res.json(requests)
	}
}

module.exports = new RequestController()
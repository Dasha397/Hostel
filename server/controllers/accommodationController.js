const { Accommodation_information, Status } = require('../models/models')
const ApiError = require('../error/ApiError')

class AccommodationController {
	async create(req, res, next) {
		try {
			console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqq', req.body)
			const { request } = req.body
			const { id: defaultStatus } = await Status.findOne({
				where: {
					type: "В очереди"
				}
			})

			const accommodation = await Accommodation_information.create({ requestId: request.id, statusId: defaultStatus })
			// console.log(accommodation)
			return res.json(accommodation)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async update(req, res) {
		const { chekin_date, checkout_date, status, id } = req.body
		const accommodation = await Accommodation_information.findOne({ where: { id } });

		if (CorrectStatus(status)) {
			const { id: statusId } = await Status.findOne({
				where: {
					type: status
				}
			})

			await accommodation.update({
				chekin_date: chekin_date,
				checkout_date: checkout_date,
				statusId: statusId
			})
		} else {
			return res.json({ message: "Такого статуса нет" })
		}

		return res.json(accommodation)
	}

	async getAll(req, res) {
		const accommodation = await Accommodation_information.findAll()
		return res.json(accommodation)
	}

	async getOne(req, res) {
		const accommodation = await Accommodation_information.findOne({ where: { requestId: req.params.id } })
		//console.log(accommodation)
		return res.json(accommodation)
	}
}

function CorrectStatus(status) {
	if (status == "В очереди" || status == "Заселен" || status == "Отказано" || status == "Выселен") {
		return true;
	}
	return false;
}

module.exports = new AccommodationController()
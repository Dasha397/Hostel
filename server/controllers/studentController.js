const { Student, Request, Accommodation_information, Status } = require('../models/models')
const ApiError = require('../error/ApiError')

class StudentController {
	async create(req, res, next) {
		try {
			const { name, surname, patronymic, gender, group, phone, user } = req.body
			//console.log(name, surname, patronymic, gender, group, phone, userId)
			const student = await Student.create({ name, surname, patronymic, gender, group, phone, userId: user.id }).catch(err => console.log(err))
			//console.log('fsdf')
			// const student = await Student.create({
			// 	name: 'John',
			// 	surname: 'Doe',
			// 	patronymic: 'Smith',
			// 	gender: 'male',
			// 	group: 'A1',
			// 	phone: '1234567890',
			// 	userId: 789
			// })
			return res.json(student)
		} catch (e) {
			return next(ApiError.badRequest(e.message))
		}
	}

	async update(req, res) {
		// пока не нужно
	}

	async getAll(req, res) {
		const { status } = req.query

		const students = await Student.findAll(status ? {
			include: {
				model: Request,
				//required: true,
				include: {
					model: Accommodation_information,
					right: true,
					//required: true,
					include: {
						model: Status,
						//required: true,
						where: {
							type: status
						}
					}
				}
			}
		}
			: {}
		)

		//const students = await Student.findAll({ include: { all: true, nested: true } });

		// const students = await Student.findAll({
		// 	include: [{
		// 		model: Request,
		// 		include: [{
		// 			model: Accommodation_information,
		// 		}],
		// 	},]
		// })

		// const students = await Student.findAll({
		// 	where: {
		// 		id: [
		// 			Request.findAll({
		// 				attributes: [studentId],
		// 				where: {
		// 					id: [
		// 						Accommodation_information.findAll({
		// 							attributes: [requestId],
		// 							where: {
		// 								statusId: [
		// 									Status.findAll({
		// 										attributes: [id],
		// 										where: {
		// 											type: status
		// 										}
		// 									})
		// 								]
		// 							}
		// 						})
		// 					]
		// 				}
		// 			})
		// 		]
		// 	}
		// })

		return res.json(students)
	}

	async getOne(req, res, next) {
		try {
			const student = await Student.findOne({ where: { id: req.params.id } }) // student/id
			return res.json(student)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
		// to do
	}
}

module.exports = new StudentController()
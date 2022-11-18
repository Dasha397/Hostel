// const jwt = require('jsonwebtoken')

// module.exports = function (req, res, next) {
// 	if (req.method === "OPTIONS") { // need only get/post/put...
// 		next()
// 	}
// 	try {
// 		const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
// 		if (!token) {
// 			return res.status(401).json({ message: "Пользователь не авторизован1" })
// 		}
// 		const decoded = jwt.verify(token, process.env.SECRET_KEY)
// 		req.user = decoded
// 		next()
// 	} catch (error) {
// 		res.status(401).json({ message: "Пользователь не авторизован2" })
// 	}
// };

const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
	if (req.method === "OPTIONS") {
		next()
	}
	try {
		const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
		if (!token) {
			return res.status(401).json({ message: "Не авторизован1" })
		}
		const decoded = jwt.verify(token, process.env.SECRET_KEY)
		req.user = decoded
		next()
	} catch (e) {
		res.status(401).json({ message: "Не авторизован2" })
	}
};
require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', router) // обработка router по /api

app.use(errorHandler) // обработка ошибок, последний middleware

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync({}) //{ alter: true }

		app.listen(PORT, () => { console.log(`Server started work on port ${PORT}`) })
	} catch (e) {
		console.log(e)
	}
}

start()
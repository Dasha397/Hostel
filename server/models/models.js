const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	login: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: "USER" },
}, { timestamps: false })

const Student = sequelize.define('student', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, allowNull: false },
	surname: { type: DataTypes.STRING, allowNull: false },
	patronymic: { type: DataTypes.STRING, allowNull: false },
	gender: { type: DataTypes.STRING, allowNull: false },
	group: { type: DataTypes.STRING, allowNull: false },
	phone: { type: DataTypes.STRING, allowNull: false },

}, { timestamps: false })

const Request = sequelize.define('request', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	application_date: { type: DataTypes.DATE },

}, { timestamps: false })

const Accommodation_information = sequelize.define('accommodation_information', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	checkin_date: { type: DataTypes.DATE },
	checkout_date: { type: DataTypes.DATE },

}, { timestamps: false })

const Status = sequelize.define('status', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	type: { type: DataTypes.STRING, unique: true },

}, { timestamps: false })

const Room = sequelize.define('room', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	number: { type: DataTypes.INTEGER, unique: true },
	vacancies: { type: DataTypes.INTEGER },

}, { timestamps: false })

const Benefit = sequelize.define('benefit', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

}, { timestamps: false })

const Penelty = sequelize.define('penelty', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

}, { timestamps: false })

const Type_of_benefit = sequelize.define('type_of_benefit', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	type: { type: DataTypes.STRING, unique: true },
	priority: { type: DataTypes.INTEGER },

}, { timestamps: false })

const Type_of_penelty = sequelize.define('type_of_penelty', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	type: { type: DataTypes.STRING, unique: true },
	priority: { type: DataTypes.INTEGER },

}, { timestamps: false })

User.hasOne(Student, {
	foreignKey: { unique: true }
})
Student.belongsTo(User)

Student.hasOne(Request, {
	foreignKey: { unique: true }
})
Request.belongsTo(Student)

Request.hasOne(Accommodation_information, {
	foreignKey: { allowNull: false, unique: true }
})
Accommodation_information.belongsTo(Request)

Status.hasMany(Accommodation_information, {
	foreignKey: { allowNull: false }
})
Accommodation_information.belongsTo(Status)

Room.hasMany(Accommodation_information)
Accommodation_information.belongsTo(Room)

Student.hasMany(Benefit)
Benefit.belongsTo(Student)

Type_of_benefit.hasMany(Benefit, {
	foreignKey: { allowNull: false }
})
Benefit.belongsTo(Type_of_benefit)

Student.hasMany(Penelty)
Penelty.belongsTo(Student)

Type_of_penelty.hasMany(Penelty, {
	foreignKey: { allowNull: false }
})
Penelty.belongsTo(Type_of_penelty)

module.exports = {
	User,
	Student,
	Request,
	Accommodation_information,
	Status,
	Room,
	Benefit,
	Penelty,
	Type_of_benefit,
	Type_of_penelty,
}
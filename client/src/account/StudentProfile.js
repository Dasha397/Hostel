import { makeAutoObservable } from "mobx";

export default class StudentProfile {
	constructor() {
		this._students = [{
			id: 1,
			user_id: 1,
			name: "Дарья",
			surname: "Амельченя",
			patronymic: "Вячеславовна",
			gender: "Ж",
			phone: "+375-29-109-52-70",
			group: "010902"
		},
		{
			id: 2,
			user_id: 2,
			name: "Иван",
			surname: "Розанов",
			patronymic: "Юрьевич",
			gender: "М",
			phone: "+375-29-650-61-60",
			group: "010902"
		},
		{
			id: 3,
			user_id: 3,
			name: "Елена",
			surname: "Черкас",
			patronymic: "Дмитриевна",
			gender: "Ж",
			phone: "+375-29-111-22-33",
			group: "022402"
		},]

		this._requests = [
			//{
			// 	id: 1,
			// 	student_id: 1,
			// 	application_date: "01.10.2022",
			// },
			{
				id: 2,
				student_id: 2,
				application_date: "05.10.2022",
			},
			{
				id: 3,
				student_id: 3,
				application_date: "10.10.2022",
			},]

		this._accommodations = [{
			id: 1,
			student_id: 1,
			status_id: 2,
			room_id: null,
			checkin_date: null,
		},
		{
			id: 2,
			student_id: 2,
			status_id: 1,
			room_id: null,
			checkin_date: null,
		}]

		this._statuses = [{
			id: 1,
			type: "Документы приняты",
		},
		{
			id: 2,
			type: "В очереди",
		},
		{
			id: 3,
			type: "Заселен",
		}]

		this._rooms = [{
			id: 1,
			number: 100,
			count: 5
		}]

		this._selectedStudent = {
			id: 1,
			user_id: 1,
			name: "Дарья",
			surname: "Амельченя",
			patronymic: "Вячеславовна",
			gender: "М",
			phone: "+375-29-109-52-70",
			group: "010902"
		}
		this._selectedRequest = {}
		this._selectedAccommodation = {}
		this._selectedBenefit = {}
		this._selectedPenalty = {}
		makeAutoObservable(this) // теперь mobx следит за изменениями и рендерит
	}

	setStudents(students) {
		this._students = students
	}

	addStudent(student) {
		this._students.push(student);
	}
	addRequest(req) {
		this._requests.push(req);
	}
	addAccommodation(ac) {
		this._accommodations.push(ac);
	}

	setSelectedStudent(student) {
		this._selectedStudent = student
	}
	setSelectedRequest(req) {
		this._selectedRequest = req
	}
	setSelectedAccommodation(acc) {
		this._selectedAccommodation = acc
	}
	setSelectedBenefit(ben) {
		this._selectedBenefit = ben
	}
	setSelectedPenalty(pen) {
		this._selectedPenalty = pen
	}

	get students() { // компьютед функции, вызываются если значение было изменено, оптимизация
		return this._students
	}

	get selectedStudent() {
		return this._selectedStudent;
	}
	get selectedRequest() {
		return this._selectedRequest;
	}
	get selectedAccommodation() {
		return this._selectedAccommodation;
	}
	get selectedBenefit() {
		return this._selectedBenefit;
	}
	get selectedPenalty() {
		return this._selectedPenalty;
	}
}
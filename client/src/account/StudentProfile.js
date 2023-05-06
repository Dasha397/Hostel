import { makeAutoObservable } from "mobx";

export default class StudentProfile {
	constructor() {
		this._student = {
			id: 1,
			user_id: 1,
			name: "Дарья",
			surname: "Амельченя",
			patronymic: "Вячеславовна",
			gender: "Ж",
			phone: "+375-29-109-52-70",
			group: "010902"
		}

		//makeAutoObservable(this) // теперь mobx следит за изменениями и рендерит
	}

	setStudent(student) {
		this._student = student
	}
}
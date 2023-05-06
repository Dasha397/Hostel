import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Context } from '../index';
import StudentBar from '../components/StudentBar';
import { observer } from 'mobx-react-lite';
import { getAllInformations, getAllRequests, createRequest } from '../http/userAPI';

const AccommodationInformation = observer(() => {
	const { student } = useContext(Context)
	//let request = student._student

	const findRequest = async (student) => {
		let requests = await getAllRequests()
		let request = requests.find((request) => request.studentId === student._student.id)
		console.log(request)
		return request
	}

	const findAccomInfo = async (request) => {
		let accommodations = await getAllInformations()
		let accommodation = accommodations.find((info) => request.id === info.requestId)
		console.log(accommodation)
		return accommodation
	}

	const click = async () => {
		// students.setSelectedRequest({
		// 	student_id: students._selectedStudent.id,
		// 	application_date: date.toLocaleDateString(),
		// })
		// students.setSelectedAccommodation({
		// 	student_id: students._selectedStudent.id,
		// 	status_id: 1,
		// })
		// students.addRequest(students._selectedRequest);
		// students.addAccommodation(students._selectedAccommodation);

		let request = await createRequest(date.toLocaleDateString(), student._student)
		request.studentId = student._student.id
		request.application_date = date.toLocaleDateString()

	}

	const request = findRequest(student);
	let accommodation = 0;

	if (request) {
		accommodation = findAccomInfo(request)
	}

	//let requests = ;
	//students.setSelectedRequest(students._requests.find((req) => req.student_id === students._selectedStudent.id));
	//students.setSelectedAccommodation(students._accommodations.find((ac) => ac.student_id === students._selectedStudent.id))
	const date = new Date();
	//console.log(JSON.stringify(students))

	return (
		<Container className='d-flex mt-5 justify-content-between' style={{ width: 1100 }}>
			<StudentBar />
			<Card bg={'light'}
				key={'light'}
				text={'dark'}
				style={{ width: 800 }}
				className='p-5 ms-5 d-flex flex-column'>
				<Card.Title className='mb-3 m-auto'>
					<h4>Информация о заселении</h4>
				</Card.Title>
				<Card.Body>
					{!request ?
						<>
							<p>
								На данный момент информация о поданных завках отсутствует
							</p>

							<Button className='mb-4' onClick={click}>
								Подать завку
							</Button>
						</>
						:
						<>
							{ }
							<p>
								Подача следующей заявки для Вас станет доступна позже
							</p>

							<Button disabled className='mb-4'>
								Подать завку
							</Button>

							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Дата подачи</th>
										<th>Статус</th>
										<th>Дата заселения</th>
										<th>Комната</th>
									</tr>
								</thead>
								<tbody>
									{/* <tr>
										<td>{students._selectedRequest.application_date}</td>
										<td>{students._statuses.find((s) => s.id === students._selectedAccommodation.status_id).type}</td>
										<td>{students._selectedAccommodation.checkin_date || '-'}</td>
										<td>{students._rooms.find((r) => r.id === students._selectedAccommodation.room_id) ?
											students._rooms.find((r) => r.id === students._selectedAccommodation.room_id).number
											:
											'-'}</td>
									</tr> */}
								</tbody>
							</Table>
						</>
					}
				</Card.Body>
			</Card>
		</Container >
	);
});

// const AccommodationInformation = () => { }

export default AccommodationInformation;
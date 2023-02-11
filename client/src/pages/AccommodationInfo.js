import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Context } from '../index';
import StudentBar from '../components/StudentBar';
import { observer } from 'mobx-react-lite';

const AccommodationInformation = observer(() => {
	const { students } = useContext(Context)

	students.setSelectedRequest(students._requests.find((req) => req.student_id === students._selectedStudent.id));
	students.setSelectedAccommodation(students._accommodations.find((ac) => ac.student_id === students._selectedStudent.id))
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
					{!students._selectedRequest ?
						<>
							<p>
								На данный момент информация о поданных завках отсутствует
							</p>

							<Button className='mb-4' onClick={() => {
								students.setSelectedRequest({
									student_id: students._selectedStudent.id,
									application_date: date.toLocaleDateString(),
								})
								students.setSelectedAccommodation({
									student_id: students._selectedStudent.id,
									status_id: 1,
								})
								students.addRequest(students._selectedRequest);
								students.addAccommodation(students._selectedAccommodation);
							}}>
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
									<tr>
										<td>{students._selectedRequest.application_date}</td>
										<td>{students._statuses.find((s) => s.id === students._selectedAccommodation.status_id).type}</td>
										<td>{students._selectedAccommodation.checkin_date || '-'}</td>
										<td>{students._rooms.find((r) => r.id === students._selectedAccommodation.room_id) ?
											students._rooms.find((r) => r.id === students._selectedAccommodation.room_id).number
											:
											'-'}</td>
									</tr>
								</tbody>
							</Table>
						</>
					}
				</Card.Body>
			</Card>
		</Container >
	);
});

export default AccommodationInformation;
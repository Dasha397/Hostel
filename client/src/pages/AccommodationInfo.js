import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Context } from '../index';
import StudentBar from '../components/StudentBar';
import { observer } from 'mobx-react-lite';
import { findRequest, findAccommodation, createRequest, createAccommodation, getStatus } from '../http/userAPI';

const AccommodationInformation = observer(() => {
	const { student } = useContext(Context)
	const [request, setRequest] = useState('')
	const [accommodation, setAccommodation] = useState({})
	const [status, setStatus] = useState()

	if (!student._student || !Object.keys(student._student).length) {
		student.setStudent(JSON.parse(localStorage.getItem('student')))
	}

	useEffect(() => {
		findRequest(student._student).then((req) => setRequest(req))
	}, [student])

	useEffect(() => {
		if (request && request.id) {
			console.log('request id =', request.id)
			findAccommodation(request).then((acc) => setAccommodation(acc))
		}
	}, [request])

	useEffect(() => {
		if (accommodation && accommodation.statusId) {
			console.log('status = ', accommodation.statusId)
			getStatus(accommodation).then(data => setStatus(data))
		}
	}, [accommodation])

	const click = async () => {
		let req, acc;
		req = await createRequest(student._student)
		setRequest(req)

		if (req.id) {
			acc = await createAccommodation(req)
			setAccommodation(acc)
		}
	}

	console.log(request, accommodation)


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
					{(!request || !Object.keys(request).length) ?
						<>
							<p>
								На данный момент информация о поданных заявках отсутствует
							</p>

							<Button className='mb-4' onClick={click}>
								Подать заявку
							</Button>
						</>
						:
						<>
							<p>
								Подача следующей заявки для Вас станет доступна позже
							</p>

							<Button disabled className='mb-4'>
								Подать заявку
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
										<td>{request.application_date.slice(0, 10)}</td>
										<td>{status?.data?.type
											|| '-'}</td>
										<td>{accommodation.checkin_date || '-'}</td>
										<td>{accommodation.room_id || '-'}</td>
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

// const AccommodationInformation = () => { }

export default AccommodationInformation;
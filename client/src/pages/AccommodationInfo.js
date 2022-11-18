import React from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import StudentBar from '../components/StudentBar';

function AccommodationInformation() {
	return (
		<Container className='d-flex mt-5' style={{ width: 1000 }}>
			<StudentBar />
			<Card bg={'light'}
				key={'light'}
				text={'dark'}
				style={{ width: 600 }}
				className='p-5 ms-5 d-flex flex-column'>
				<Card.Title className='mb-3 m-auto'>
					<h4>Информация о заселении</h4>
				</Card.Title>
				<Card.Body>
					<Button className='mb-4'>
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
								<td>09.06.2022</td>
								<td>В очереди</td>
								<td>-</td>
								<td>-</td>
							</tr>
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</Container >
	);
};

export default AccommodationInformation;
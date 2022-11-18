import React from 'react';
import { Button, Card, Container, Table } from 'react-bootstrap';
import AdminBar from '../components/AdminBar';

function StudentsList() {
	return (
		<Container className='d-flex mt-5' style={{ width: 1000 }}>
			<AdminBar />
			<Card bg={'light'}
				key={'light'}
				text={'dark'}
				style={{ width: 600 }}
				className='p-5 ms-5 d-flex flex-column'>
				<Card.Title className='mb-3 m-auto'>
					<h4>Информация о студентах</h4>
				</Card.Title>
				<Card.Body>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Фамилия</th>
								<th>Имя</th>
								<th>Отчество</th>
								<th>Группа</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Амельченя</td>
								<td>Дарья</td>
								<td>Вячеславовна</td>
								<td>010902</td>
							</tr>
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</Container >
	);
};

export default StudentsList;
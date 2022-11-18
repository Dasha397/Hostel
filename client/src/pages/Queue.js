import React from 'react';
import { Button, Card, Container, Table } from 'react-bootstrap';
import AdminBar from '../components/AdminBar';

function Queue() {
	return (
		<Container className='d-flex mt-5' style={{ width: 1000 }}>
			<AdminBar />
			<Card bg={'light'}
				key={'light'}
				text={'dark'}
				style={{ width: 600 }}
				className='p-5 ms-5 d-flex flex-column'>
				<Card.Title className='mb-3 m-auto'>
					<h4>Информация о заселении</h4>
				</Card.Title>
				<Card.Body>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>№</th>
								<th>ФИО</th>
								<th>Приоритет</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Амельченя Дарья Вячеславовна</td>
								<td>6</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Розанов Иван Юрьевич</td>
								<td>-5</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Черкас Елена Дмитриевна</td>
								<td>10</td>
							</tr>
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</Container >
	);
};

export default Queue;
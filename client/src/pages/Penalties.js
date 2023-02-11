import React from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import StudentBar from '../components/StudentBar';

function Penalty() {
	return (
		<Container className='d-flex mt-5 justify-content-between' style={{ width: 1100 }}>
			<StudentBar />
			<Card bg={'light'}
				key={'light'}
				text={'dark'}
				style={{ width: 800 }}
				className='p-5 ms-5 d-flex flex-column'>
				<Card.Title className='mb-3 m-auto'>
					<h4>Информация о взысканиях</h4>
				</Card.Title>
				<Card.Body>

					{/* <p>
						Информация о взысканиях отсутствует
					</p> */}

					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Тип взыскания</th>
								<th>Приоритет</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>По факультету</td>
								<td>-5</td>
							</tr>
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</Container >
	)
};

export default Penalty;
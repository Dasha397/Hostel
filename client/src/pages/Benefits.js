import React from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import StudentBar from '../components/StudentBar';

function Benefit() {
	return (
		<Container className='d-flex mt-5 justify-content-between' style={{ width: 1100 }}>
			<StudentBar />
			<Card bg={'light'}
				key={'light'}
				text={'dark'}
				style={{ width: 800 }}
				className='p-5 ms-5 d-flex flex-column'>
				<Card.Title className='mb-3 m-auto'>
					<h4>Информация о льготах</h4>
				</Card.Title>
				<Card.Body>

					{/* <p>
						Информация о льготах отсутствует
					</p> */}

					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Тип льготы</th>
								<th>Приоритет</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Из неполных семей (неполная семья, в которой дети находятся на иждивении и воспитании одного родителя)</td>
								<td>5</td>
							</tr>
							<tr>
								<td>Принимающие активное участие в общественной жизни университета (по представлению соответствующей организации)</td>
								<td>1</td>
							</tr>
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</Container >
	);
};

export default Benefit;
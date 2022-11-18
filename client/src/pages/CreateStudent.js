import React from 'react';
import { Container, Col, Form, Row, Card, Button } from 'react-bootstrap';

function CreateStudent() {
	return (
		<Container className='d-flex mt-5 flex-column justify-content-center align-items-center'>
			<Card bg={'light'}
				key={'light'}
				text={'dark'}
				style={{ width: 600 }}
				className='p-5'>
				<h2 className='m-auto'>Введите данные</h2>
				<Form className='d-flex flex-column mt-3'>
					<Row className='mt-4'>
						<Form.Label column sm='3'>Фамилия</Form.Label>
						<Col sm="9">
							<Form.Control placeholder="Введите фамилию..." />
						</Col>
					</Row>
					<Row className='mt-4'>
						<Form.Label column sm='3'>Имя</Form.Label>
						<Col sm="9">
							<Form.Control placeholder="Введите имя..." />
						</Col>
					</Row>
					<Row className='mt-4'>
						<Form.Label column sm='3'>Отчетсво</Form.Label>
						<Col sm="9">
							<Form.Control placeholder="Введите отчество..." />
						</Col>
					</Row>
					<Row className='d-flex mt-4'>
						<Form.Label column sm='8'>Пол</Form.Label>
						<Form.Select style={{ width: 163, color: "gray" }}>
							<option>Выберите</option>
							<option>М</option>
							<option>Ж</option>
						</Form.Select>
					</Row>
					<Row className='mt-4'>
						<Form.Label column sm='3'>Группа</Form.Label>
						<Col sm="9">
							<Form.Control placeholder="Введите номер группы..." />
						</Col>
					</Row>
					<Row className='mt-4'>
						<Form.Label column sm='3'>Телефон</Form.Label>
						<Col sm="9">
							<Form.Control placeholder="Введите номер телефона..." />
						</Col>
					</Row>
				</Form>
				<Button variant='outline-success' style={{ width: 104 }} className='me-0 ms-auto mt-4' >
					Отправить
				</Button>
			</Card>
		</Container >
	);
};

export default CreateStudent;
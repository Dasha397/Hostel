import React, { useContext, useState } from 'react';
import { Container, Col, Form, Row, Card, Button } from 'react-bootstrap';
import { Context } from '../index';

function CreateStudent() {
	const [value, setValue] = useState()
	const { user } = useContext(Context)
	const { student } = useContext(Context)
	const [name, setName] = useState()
	const [secondName, setSecondName] = useState()
	const [patronymic, setPatronymic] = useState()
	const [group, setGroup] = useState()
	const [gender, setGender] = useState()
	const [phone, setPhone] = useState()

	// click() {
	// 	student.push();
	// }

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
							<Form.Control
								placeholder="Введите фамилию..."
								value={secondName}
								onChange={e => setSecondName(e.target.value)}
							/>
						</Col>
					</Row>
					<Row className='mt-4'>
						<Form.Label column sm='3'>Имя</Form.Label>
						<Col sm="9">
							<Form.Control
								placeholder="Введите имя..."
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</Col>
					</Row>
					<Row className='mt-4'>
						<Form.Label column sm='3'>Отчетсво</Form.Label>
						<Col sm="9">
							<Form.Control
								placeholder="Введите отчество..."
								value={patronymic}
								onChange={e => setPatronymic(e.target.value)} />
						</Col>
					</Row>
					<Row className='d-flex mt-4'>
						<Form.Label column sm='8'>Пол</Form.Label>
						<Form.Select style={{ width: 163, color: "gray" }}
							value={gender}
							onChange={e => setGender(e.target.value)}>
							<option disabled>Выберите</option>
							<option>М</option>
							<option>Ж</option>
						</Form.Select>
					</Row>
					<Row className='mt-4'>
						<Form.Label column sm='3'>Группа</Form.Label>
						<Col sm="9">
							<Form.Control placeholder="Введите номер группы..."
								value={group}
								onChange={e => setGroup(e.target.value)} />
						</Col>
					</Row>
					<Row className='mt-4'>
						<Form.Label column sm='3'>Телефон</Form.Label>
						<Col sm="9">
							<Form.Control type='text'
								placeholder="Введите номер телефона..."
								value={phone}
								onChange={e => setPhone(e.target.value)} />
						</Col>
					</Row>
				</Form>
				<Button
					variant='outline-success'
					style={{ width: 104 }}
					className='me-0 ms-auto mt-4'
					onClick={console.log(gender)}
				>
					Отправить
				</Button>
			</Card>
		</Container >
	);
};

export default CreateStudent;
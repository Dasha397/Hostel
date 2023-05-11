import React, { useContext, useState } from 'react';
import { Container, Col, Form, Row, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PROFILE_ROUTE } from '../utils/consts';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { createStudent } from '../http/userAPI';

const CreateStudent = observer(() => {
	const navigate = useNavigate()
	// const [value, setValue] = useState()
	const { user } = useContext(Context)
	//console.log(user._user)
	if (!Object.keys(user._user).length) {
		user.setUser(JSON.parse(localStorage.getItem('user')))
	}
	const { student } = useContext(Context)
	const [name, setName] = useState('')
	const [secondName, setSecondName] = useState('')
	const [patronymic, setPatronymic] = useState('')
	const [group, setGroup] = useState('')
	const [gender, setGender] = useState('М')
	const [phone, setPhone] = useState('')

	const click = async () => {
		setName(name[0].toUpperCase().concat(name.slice(1).toLowerCase()));
		setSecondName(secondName[0].toUpperCase().concat(secondName.slice(1).toLowerCase()));
		setPatronymic(patronymic[0].toUpperCase().concat(patronymic.slice(1).toLowerCase()));

		if (name.length === 0) {
			alert('Введите имя');
			return;
		} else if (secondName.length === 0) {
			alert('Введите фамилию');
			return;
		} else if (patronymic.length === 0) {
			alert('Введите отчество');
			return;
		} else if (group.length !== 6 || !Number(group)) {
			alert('Номер группы должен состоять из 6-ти цифр');
			return;
		} else if (phone.length !== 13 || phone[0] !== '+' || !Number(phone.slice(1))) {
			alert('Номер телефона должен состоять из знака "+" и 12-ти цифр');
			return;
		}

		//console.log(student);
		let data = await createStudent(name, secondName, patronymic, gender, group, phone, user._user);
		// students._students.push(student);
		//console.log(data)
		student.setStudent(data);
		localStorage.setItem('student', JSON.stringify(student._student))
		navigate(PROFILE_ROUTE);
	}

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
						{/* <Form.Control as="select"
							style={{ width: 163, color: "gray" }}
							value={gender}
							onChange={e => setGender(e.target.value)}
						>
							<option>М</option>
							<option>Ж</option>
						</Form.Control> */}

						<Form.Select
							style={{ width: 163, color: "gray" }}
							value={gender}
							onChange={e => setGender(e.target.value)} >
							<option disabled>Выберите пол</option>
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
								placeholder="Введите номер телефона (+375ххxxxxxxx)"
								value={phone}
								onChange={e => setPhone(e.target.value)} />
						</Col>
					</Row>
				</Form>
				<Button
					variant='outline-success'
					style={{ width: 104 }}
					className='me-0 ms-auto mt-4'
					onClick={click}
				>
					Отправить
				</Button>
			</Card>
		</Container >
	);
});

export default CreateStudent;
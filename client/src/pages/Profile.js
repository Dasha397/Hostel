import React, { useContext } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import StudentBar from '../components/StudentBar';
import woman from '../assets/woman.png'
import man from '../assets/man.png'
import { Context } from '../index'
import { observer } from 'mobx-react-lite';

const Profile = observer(() => {
	const { user } = useContext(Context)
	const { student } = useContext(Context)

	if (!student._student || !Object.keys(student._student).length) {
		student._student = JSON.parse(localStorage.getItem('student'))
	}

	return (
		<Container className='d-flex mt-5 justify-content-between' style={{ width: 1100 }}>
			<StudentBar />
			<Card bg={'light'}
				key={'light'}
				text={'dark'}
				style={{ width: 800 }}
				className='p-5 ms-5 d-flex flex-column'>
				<Card.Img variant="top" src={student._student.gender === "М" ? man : woman} style={{ width: 160 }} className='ms-3 mb-3' />
				<Card.Body>
					<Card.Title>
						<h4>
							{student._student.surname} {student._student.name} {student._student.patronymic}
						</h4>
					</Card.Title>
					<Card.Text className='mt-2'>
						Студент группы {student._student.group}
						<br />
						Номер телефона: {student._student.phone}
					</Card.Text>
				</Card.Body>
			</Card>
		</Container >
	);
});

export default Profile;
import React, { useContext } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import StudentBar from '../components/StudentBar';
import woman from '../assets/woman.png'
import man from '../assets/man.png'
import { Context } from '../index'

function Profile() {
	//const { user } = useContext(Context)
	const { student } = useContext(Context)

	//students.setSelectedStudent(students.students.find((student) => student.user_id === user._user.id))
	return (
		<Container className='d-flex mt-5 justify-content-between' style={{ width: 1100 }}>
			<StudentBar />
			<Card bg={'light'}
				key={'light'}
				text={'dark'}
				style={{ width: 800 }}
				className='p-5 ms-5 d-flex flex-column'>
				<Card.Img variant="top" src={student._student.gender === "M" ? man : woman} style={{ width: 160 }} className='ms-3 mb-3' />
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
};

export default Profile;
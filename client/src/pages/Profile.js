import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import StudentBar from '../components/StudentBar';
import woman from '../image/woman.png'

function Profile() {
	return (
		<Container className='d-flex mt-5' style={{ width: 1000 }}>
			<StudentBar />
			<Card bg={'light'}
				key={'light'}
				text={'dark'}
				style={{ width: 600 }}
				className='p-5 ms-5 d-flex flex-column'>
				<Card.Img variant="top" src={woman} style={{ width: 160 }} className='ms-3 mb-3' />
				<Card.Body>
					<Card.Title>
						<h4>Амельченя Дарья Вячеславовна</h4>
					</Card.Title>
					<Card.Text className='mt-2'>
						Студент группы 010902
						<br />
						Номер телефона: +375-29-109-52-70
					</Card.Text>
				</Card.Body>
			</Card>
		</Container >
	);
};

export default Profile;
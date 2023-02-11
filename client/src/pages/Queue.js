import React, { useState } from 'react';
import { Button, Card, Container, Table } from 'react-bootstrap';
import AdminBar from '../components/AdminBar';
import { SlArrowLeft } from 'react-icons/sl'
import { SlArrowRight } from 'react-icons/sl'
import { BiSortAlt2 } from 'react-icons/bi'
import Modal from 'react-bootstrap/Modal'

const students = [
	{
		firstName: "Яна",
		secondName: "Абрамова",
		thirdName: "Вячеславовна",
		priority: 1,
		application_date: '09.10.2022',
	},
	{
		firstName: "Виктория",
		secondName: "Лялькина",
		thirdName: "Игоревна",
		priority: 5,
		application_date: '09.10.2022',
	},
	{
		firstName: "Юлия",
		secondName: "Светова",
		thirdName: "Дмитриевна",
		priority: 0,
		application_date: '09.10.2022',
	},
	{
		firstName: "Святослав",
		secondName: "Кульев",
		thirdName: "Андреевич",
		priority: 10,
		application_date: '09.10.2022',
	},
	{
		firstName: "Юрий",
		secondName: "Иновейкин",
		thirdName: "Дмитриевич",
		priority: 1,
		application_date: '10.10.2022',
	},
	{
		firstName: "Люсия",
		secondName: "Жук",
		thirdName: "Александровна",
		priority: 6,
		application_date: '10.10.2022',
	}
]

const type_benefit = [{
	type: "Из неполных семей (неполная семья, в которой дети находятся на иждивении и воспитании одного родителя)",
	priority: 5,
}, {
	type: "Принимающие активное участие в общественной жизни университета (по представлению соответствующей организации)",
	priority: 1,
}]

const setSort = (sb) => {
	if (sb == "secondName" || sb == "application_date") return true;
	return false;
}

function Queue() {
	let number = 0;
	const fullscreen = false
	const [show, setShow] = useState(false);
	const [currentStudent, setCurrentStudent] = useState(students[0])
	const [sortBy, setSortBy] = useState("secondName")
	const sortCondition = (s1, s2) => s1[sortBy] > s2[sortBy] ? 1 : -1
	const sortConditionReverse = (s1, s2) => s1[sortBy] > s2[sortBy] ? -1 : 1
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Container className='d-flex mt-5 justify-content-between' style={{ width: 1100 }}>
			<AdminBar />
			<Card bg={'light'}
				key={'light'}
				text={'dark'}
				style={{ width: 800 }}
				className='p-5 ms-5 d-flex flex-column'>
				<Card.Title className='mb-3 m-auto'>
					<h4>Информация о заселении</h4>
				</Card.Title>
				<Card.Body>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>№</th>
								<td className='hover-zoom'
									onClick={() => setSortBy("secondName")}>ФИО {sortBy === "secondName" && <BiSortAlt2 />}</td>
								<td onClick={() => setSortBy("application_date")}>Дата подачи заявки {sortBy === "application_date" && <BiSortAlt2 />}</td>
								<td onClick={() => setSortBy("priority")}>Приоритет {sortBy === "priority" && <BiSortAlt2 />}</td>
							</tr>
						</thead>
						<tbody>
							{students.sort(setSort(sortBy) ? sortCondition : sortConditionReverse).map(s => {
								return (
									<tr key={number}
										style={{ cursor: 'pointer' }}
										onClick={() => {
											handleShow();
											setCurrentStudent(s)

										}}>
										<td>{++number}</td>
										<td>{`${s.secondName} ${s.firstName} ${s.thirdName}`}</td>
										<td>{s.application_date}</td>
										<td>{s.priority}</td>
									</tr>
								)
							})}
						</tbody>
					</Table>

					<div className='d-flex align-items-end ms-auto mt-5' style={{ width: 300 }}>
						<p style={{ height: 17 }}>
							<SlArrowLeft></SlArrowLeft>
						</p>
						<Button variant='outline-secondary' style={{ width: 42 }} className='ms-3'>
							1
						</Button>
						<Button variant='outline-secondary' style={{ width: 42 }} className='ms-2'>
							2
						</Button>
						<h6 style={{ width: 30, height: 20 }} className='m-0 ms-3'>
							. . .
						</h6>
						<Button variant='outline-secondary' className='ms-2'>
							10
						</Button>
						<Button variant='outline-secondary' className='ms-2 me-3'>
							11
						</Button>
						<p style={{ height: 17 }}>
							<SlArrowRight></SlArrowRight>
						</p>
					</div>

				</Card.Body>
			</Card>
			{show &&
				<Modal show={show} fullscreen={fullscreen} size={"xl"} onHide={() => setShow(false)} animation>
					<Modal.Header closeButton>
						<Modal.Title >Информация о студенте</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p><span class="fw-bold">ФИО:</span> {currentStudent.secondName} {currentStudent.firstName} {currentStudent.thirdName}</p>
						<p class="fw-bold">Льготы и взыскания</p>
						<Table striped bordered hover>
							<thead>
								<tr>
									<td>Тип льготы</td>
									<td>Приоритет</td>
								</tr>
							</thead>
							<tbody>
								{type_benefit.map(s => {
									return (
										<tr>

											<td>{s.type}</td>
											<td>{s.priority}</td>
										</tr>
									)
								})}
							</tbody>
						</Table>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Закрыть
						</Button>
						<Button variant="primary" onClick={handleClose}>
							Одобрить
						</Button>
					</Modal.Footer>
				</Modal>}
		</Container >
	);
};

export default Queue;
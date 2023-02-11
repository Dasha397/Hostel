import React, { useState } from 'react';
import { Button, Card, Container, Table } from 'react-bootstrap';
import AdminBar from '../components/AdminBar';
import { BiSortAlt2 } from 'react-icons/bi'
import Modal from 'react-bootstrap/Modal';
import { SlArrowLeft } from 'react-icons/sl'
import { SlArrowRight } from 'react-icons/sl'

const students = [
	{
		firstName: "Яна",
		secondName: "Абрамова",
		thirdName: "Вячеславовна",
		application_date: "15.10.2022",
		group: "022021",
	},
	{
		firstName: "Виктория",
		secondName: "Лялькина",
		thirdName: "Игоревна",
		application_date: '15.10.2022',
		group: "970312",
	},
	{
		firstName: "Юлия",
		secondName: "Светова",
		thirdName: "Дмитриевна",
		application_date: '16.10.2022',
		group: "970312",
	},
	{
		firstName: "Святослав",
		secondName: "Кульев",
		thirdName: "Андреевич",
		application_date: '16.10.2022',
		group: "022021",
	},
	{
		firstName: "Юрий",
		secondName: "Иновейкин",
		thirdName: "Дмитриевич",
		application_date: '16.10.2022',
		group: "010901",
	},
	{
		firstName: "Люсия",
		secondName: "Жук",
		thirdName: "Александровна",
		application_date: '16.10.2022',
		group: "010902",
	}
]

function StudentsList() {
	const fullscreen = false
	const [show, setShow] = useState(false);
	const [sortBy, setSortBy] = useState("secondName")

	let number = 0;

	const sortCondition = (s1, s2) => s1[sortBy] > s2[sortBy] ? 1 : -1

	return (
		<Container className='d-flex mt-5 justify-content-between' style={{ width: 1100 }}>
			<AdminBar />
			<Card bg={'light'}
				key={'light'}
				text={'dark'}
				style={{ width: 800 }}
				className='p-5 ms-5 d-flex flex-column'>
				<Card.Title className='mb-3 m-auto'>
					<h4>Информация о заявках</h4>
				</Card.Title>
				<Card.Body>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>№</th>
								<td className='hover-zoom '
									onClick={() => setSortBy("secondName")}>ФИО {sortBy === "secondName" && <BiSortAlt2 />}</td>
								<td onClick={() => setSortBy("group")}>Группа {sortBy === "group" && <BiSortAlt2 />}</td>
								<td onClick={() => setSortBy("application_date")}>Дата подачи заявки {sortBy === "application_date" && <BiSortAlt2 />}</td>
								{/* <th></th> */}
							</tr>
						</thead>
						<tbody>
							{students.sort(sortCondition).map(s => {
								return (
									<tr
										key={number} style={{ cursor: 'pointer' }}
										onClick={() => setShow(true)}>
										<td>{++number}</td>
										<td>{`${s.secondName} ${s.firstName} ${s.thirdName}`}</td>
										<td>{s.group}</td>
										<td>{s.application_date}</td>
									</tr>
								)
							})}
							{/* <tr>
								<td>Амельченя</td>
								<td>Дарья</td>
								<td>Вячеславовна</td>
								<td>010902</td>
								<td style={{ height: 41 }} className='d-flex justify-content-center align-items-center'>
									<Button variant="link" onClick={() => handleShow()}>
										<MdViewInAr />
									</Button>
									<Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
										<Modal.Header closeButton>
											<Modal.Title>Modal</Modal.Title>
										</Modal.Header>
										<Modal.Body>Modal body content</Modal.Body>
									</Modal>
								</td>
							</tr> */}
						</tbody>
					</Table>

					<div className='d-flex align-items-end ms-auto mt-5' style={{ width: 300 }}>
						<p style={{ height: 17 }}>
							<SlArrowLeft></SlArrowLeft>
						</p>
						<Button variant='outline-secondary' className='ms-3'>
							1
						</Button>
						<Button variant='outline-secondary' className='ms-2'>
							2
						</Button>
						<h6 style={{ width: 30, height: 20 }} className='m-0 ms-3'>
							. . .
						</h6>
						<Button variant='outline-secondary' className='ms-2'>
							5
						</Button>
						<Button variant='outline-secondary' className='ms-2 me-3'>
							6
						</Button>
						<p style={{ height: 17 }}>
							<SlArrowRight></SlArrowRight>
						</p>
					</div>
				</Card.Body>
			</Card>
			{show &&
				<Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
					<Modal.Header closeButton>
						<Modal.Title>Modal</Modal.Title>
					</Modal.Header>
					<Modal.Body>Modal body content</Modal.Body>
				</Modal>}
		</Container >
	);
};

export default StudentsList;
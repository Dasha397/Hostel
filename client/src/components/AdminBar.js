import { Container, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const AdminBar = () => {
	const location = useLocation()
	return (
		<Container style={{ width: 300 }} className='m-0'>
			{<ListGroup defaultActiveKey={location.pathname}>
				<ListGroup.Item action href="/queue">Заявки</ListGroup.Item>
				<ListGroup.Item action href="/students">Список студентов</ListGroup.Item>
				<ListGroup.Item action href="/resident">Проживающие</ListGroup.Item>
			</ListGroup>}
		</Container >
	);
};

export default AdminBar;
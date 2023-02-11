import { Container, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const AdminBar = () => {
	const location = useLocation()
	return (
		<Container style={{ width: 200 }} className='m-0'>
			{<ListGroup defaultActiveKey={location.pathname}>
				<ListGroup.Item action href="/queue">Очередь</ListGroup.Item>
				<ListGroup.Item action href="/students">Заявки</ListGroup.Item>
				<ListGroup.Item action href="/">Проживающие</ListGroup.Item>
			</ListGroup>}
		</Container >
	);
};

export default AdminBar;
import { useLocation } from 'react-router-dom';
import { Container, ListGroup } from 'react-bootstrap';

const StudentBar = () => {
	const location = useLocation()
	return (
		<Container style={{ width: 200 }} className='m-0'>
			{<ListGroup defaultActiveKey={location.pathname}>
				<ListGroup.Item action href="/profile">Профиль</ListGroup.Item>
				<ListGroup.Item action href="/accommodation">Заселение</ListGroup.Item>
				<ListGroup.Item action href="/benefit">Льготы</ListGroup.Item>
				<ListGroup.Item action href="/penalty">Взыскания</ListGroup.Item>
			</ListGroup>}
		</Container >
	);
};

export default StudentBar;
import { Container, ListGroup } from 'react-bootstrap';

const AdminBar = () => {
	return (
		<Container style={{ width: 200 }} className='m-0'>
			{<ListGroup defaultActiveKey="/queue">
				<ListGroup.Item action href="/queue">Заселение</ListGroup.Item>
				<ListGroup.Item action href="/students">Студенты</ListGroup.Item>
			</ListGroup>}
		</Container >
	);
};

export default AdminBar;
import { Container, ListGroup } from 'react-bootstrap';

const StudentBar = () => {
	return (
		<Container style={{ width: 200 }} className='m-0'>
			{<ListGroup defaultActiveKey="/profile">
				<ListGroup.Item action href="/profile">Профиль</ListGroup.Item>
				<ListGroup.Item action href="/accommodation">Заселение</ListGroup.Item>
				<ListGroup.Item action href="/benefit">Льготы</ListGroup.Item>
				<ListGroup.Item action href="/penalty">Взыскания</ListGroup.Item>
			</ListGroup>}
			{/* <Link className='nav-link' to={LOGIN_ROUTE}>Профиль</Link>
			<Link className='nav-link' to={LOGIN_ROUTE}>Заселение</Link>
			<Link className='nav-link' to={LOGIN_ROUTE}>Льготы</Link>
			<Link className='nav-link' to={LOGIN_ROUTE}>Взыскания</Link> */}
		</Container >
	);
};

export default StudentBar;
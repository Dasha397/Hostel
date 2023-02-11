import React, { useContext } from 'react'
import { Context } from '../index'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LOGIN_ROUTE } from '../utils/consts';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSnow } from 'react-icons/bs'
import { observer } from "mobx-react-lite"

const NavBar = observer(() => {
	const { user } = useContext(Context)
	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand className='d-flex align-items-center gap-2'>
					<Link className='nav-link' to={LOGIN_ROUTE}>Общежитие</Link>
				</Navbar.Brand>
				<Nav>
					{user.isAuth ?
						<Button className='ms-2' variant="outline-dark" onClick={() => user.setIsAuth(false)}>Выйти</Button>
						:
						<Button className='ms-2' variant="outline-dark" onClick={() => user.setIsAuth(true)}>Войти</Button>
					}
				</Nav>
			</Container>
		</Navbar >
	);
});

export default NavBar;
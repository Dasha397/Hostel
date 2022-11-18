import React, { useContext } from 'react'
import { Context } from '../index'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LOGIN_ROUTE } from '../utils/consts';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSnow } from 'react-icons/bs'

const NavBar = () => {
	const { user } = useContext(Context)
	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand className='d-flex align-items-center gap-2'>
					<BsSnow />
					<Link className='nav-link' to={LOGIN_ROUTE}>Общежитие</Link>
				</Navbar.Brand>
				<Nav>
					<Nav.Link href="home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Button className='ms-2' variant="outline-dark">Войти</Button>
				</Nav>
			</Container>
		</Navbar >
	);
};

export default NavBar;
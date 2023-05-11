import React, { useContext } from 'react'
import { Context } from '../index'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LOGIN_ROUTE } from '../utils/consts';
import { Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import { BsSnow } from 'react-icons/bs'
import { observer } from "mobx-react-lite"

const NavBar = observer(() => {
	const { user } = useContext(Context)
	const navigate = useNavigate()

	if (!JSON.parse(localStorage.getItem('isAuth'))) {
		user.setIsAuth(false)
	} else {
		user.setIsAuth(true)
	}

	const click = () => {
		if (user._isAuth) {
			localStorage.clear();
		}
		user.setIsAuth(!user._isAuth)
		localStorage.setItem('isAuth', user._isAuth)
		navigate(LOGIN_ROUTE)
	}

	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand className='d-flex align-items-center gap-2'>
					<Link className='nav-link' to={LOGIN_ROUTE}>Общежитие</Link>
				</Navbar.Brand>
				<Nav>
					{user._isAuth ?
						<Button className='ms-2' variant="outline-dark" onClick={click}>Выйти</Button>
						:
						<Button className='ms-2' variant="outline-dark" onClick={click}>Войти</Button>
					}
				</Nav>
			</Container>
		</Navbar >
	);
});

export default NavBar;
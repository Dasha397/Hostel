import React, { useState } from 'react';
import { Card, Form, Container, Button, Row, InputGroup } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

const Auth = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [isPasswordVisible, setPasswordVisibility] = useState(false)

	return (
		<Container className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 54 }}>
			<Card bg={'light'}
				key={'light'}
				text={'dark'}
				style={{ width: 600 }}
				className='p-5'>
				<h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<Form className='d-flex flex-column'>
					<Form.Control className='mt-4'
						placeholder='Введите логин...'
					/>
					<InputGroup className='mt-3'>
						<Form.Control
							placeholder='Введите пароль...'
							type={!isPasswordVisible ? 'password' : 'text'}
						/>
						<Button
							className='d-flex align-items-center'
							variant='outline-secondary' onClick={() => setPasswordVisibility(!isPasswordVisible)}>
							{!isPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
						</Button>
					</InputGroup>
					<Row className='d-flex mt-3 justify-content-between me-0'>
						{
							<div className='d-flex align-items-center' style={{ width: 'auto' }}>
								{isLogin ? "Нет аккаунта?" : "Есть аккаунт?"}
								<Link to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE} className='ms-1 nav-link text-primary'>
									{isLogin ? "Зарегистрируйтесь" : "Войдите"}
								</Link>
							</div>
						}
						<Button variant='outline-success' style={{ width: 'auto' }}>
							{isLogin ? 'Войти' : 'Зарегистрироваться'}
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	);
};

export default Auth;
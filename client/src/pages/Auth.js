import React, { useContext, useState } from 'react';
import { Card, Form, Container, Button, Row, InputGroup } from 'react-bootstrap';
import { useLocation, Link, useNavigation, useNavigate } from 'react-router-dom';
import { CREATE_STUDENT_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
	const { user } = useContext(Context)
	const location = useLocation()
	const navigate = useNavigate()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [isPasswordVisible, setPasswordVisibility] = useState(false)
	const [log, setLog] = useState('')
	const [password, setPassword] = useState('')

	const click = async () => {
		try {
			let data;
			if (isLogin) {
				data = await login(log, password)
			}
			else {
				//let response = fetch('api/user/registration').then((res) =>)
				data = await registration(log, password)
			}
			user.setUser(user)
			user.setIsAuth(true)
			console.log(user.role)

			navigate(!isLogin ? CREATE_STUDENT_ROUTE : PROFILE_ROUTE)
		} catch (error) {
			alert(error.response.data.message)
		}
	}

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
						value={log}
						onChange={e => setLog(e.target.value)}
					/>
					<InputGroup className='mt-3'>
						<Form.Control
							placeholder='Введите пароль...'
							type={!isPasswordVisible ? 'password' : 'text'}
							value={password}
							onChange={e => setPassword(e.target.value)}
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
						<Button variant='outline-success'
							style={{ width: 'auto' }}
							onClick={click}
						>
							{isLogin ? 'Войти' : 'Зарегистрироваться'}
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	);
});

export default Auth;
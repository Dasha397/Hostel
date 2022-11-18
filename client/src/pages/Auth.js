import React, { useEffect, useState } from "react"
import {
    Card,
    Form,
    Container,
    Button,
    Row,
    InputGroup,
} from "react-bootstrap"
import { useLocation, Link } from "react-router-dom"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [isPasswordVisible, setPasswordVisibility] = useState(false)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [isLoginValid, setLoginValidation] = useState(true)
    const [isPasswordValid, setPasswordValidation] = useState(true)

    useEffect(() => {
        setLoginValidation(login.length >= 4 && login.length <= 20)
		setPasswordValidation(password.length >= 4 && password.length <= 20)
    }, [login, password])

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card
                bg={"light"}
                key={"light"}
                text={"dark"}
                style={{ width: 600 }}
                className="p-5"
            >
                <h2 className="m-auto">
                    {isLogin ? "Авторизация" : "Регистрация"}
                </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-4"
						isInvalid={!isLoginValid}
						isValid={isLoginValid}
                        placeholder="Введите логин..."
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    {!isLoginValid && (
                        <Form.Text className="text-danger">
                            Your login must be 4-20 characters
                        </Form.Text>
                    )}
                    <InputGroup className="mt-3">
                        <Form.Control
							isInvalid={!isPasswordValid}
							isValid={isPasswordValid}
                            placeholder="Введите пароль..."
                            value={password}
                            type={!isPasswordVisible ? "password" : "text"}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            className="d-flex align-items-center"
                            variant="outline-secondary"
                            onClick={() =>
                                setPasswordVisibility(!isPasswordVisible)
                            }
                        >
                            {!isPasswordVisible ? (
                                <AiFillEye />
                            ) : (
                                <AiFillEyeInvisible />
                            )}
                        </Button>
                    </InputGroup>
					{!isPasswordValid && (
                        <Form.Text className="text-danger">
                            Your password must be 4-20 characters
                        </Form.Text>
                    )}
                    <Row className="d-flex mt-3 justify-content-between me-0">
                        {
                            <div
                                className="d-flex align-items-center"
                                style={{ width: "auto" }}
                            >
                                {isLogin ? "Нет аккаунта?" : "Есть аккаунт?"}
                                <Link
                                    to={
                                        isLogin
                                            ? REGISTRATION_ROUTE
                                            : LOGIN_ROUTE
                                    }
                                    className="ms-1 nav-link text-primary"
                                >
                                    {isLogin ? "Зарегистрируйтесь" : "Войдите"}
                                </Link>
                            </div>
                        }
                        <Button
                            variant="outline-success"
                            style={{ width: "auto" }}
							disabled={!(isLoginValid && isPasswordValid)}
							onClick={() => alert(`Добро пожаловать ${login}`)}
                        >
                            {isLogin ? "Войти" : "Зарегистрироваться"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth

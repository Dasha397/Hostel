import React, { useContext } from 'react';
import { Route, redirect, Routes, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index'
import Auth from '../pages/Auth'

function AppRouter() { // описывается логика навигации по странице: тоьлко авторизованные или все
	const { user } = useContext(Context);
	//console.log(user)
	return (
		<Routes>
			{/* {user.isAuth &&*/ authRoutes.map((props) =>
				<Route key={props.path} {...props} exact />
			)}
			{publicRoutes.map((props) =>
				<Route key={props.path} {...props} exact />
			)}
			{/* <Route path='*' action={() => redirect("/login")} element={<Auth />} /> */}
			<Route path='*' element={<Navigate to="/login" />} />
		</Routes>
	);
};

export default AppRouter;
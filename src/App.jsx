import { Route, Routes } from "react-router-dom"
import Posts from "./components/pages/Posts";
import Home from "./components/pages/home";
import Error from "./components/pages/Error";
import PostPage from "./components/pages/PostPage";
import publicRoutes from "./routes/publicRoutes";
import privateRoutes from "./routes/privateRoutes";
import { useState } from "react";
import MyButton from "./components/UI/MyButton/MyButton";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login/Login'
import { useSelector } from "react-redux";


function App() {
	const isAuth = useSelector(store => store.posts.isAuth);


	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home></Home>,
			children: isAuth ? privateRoutes() : publicRoutes()
		}
	]);

	console.log('App');


	return (

		<div className="App">
			<RouterProvider router={router}>

			</RouterProvider>
		</div >
	)



}

export default App

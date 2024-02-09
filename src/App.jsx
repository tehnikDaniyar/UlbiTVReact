import Home from "./components/pages/home";
import Error from "./components/pages/Error";
import PostPage from "./components/pages/PostPage";
import publicRoutes from "./routes/publicRoutes";
import privateRoutes from "./routes/privateRoutes";
import { useState } from "react";
import MyButton from "./components/UI/MyButton/MyButton";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login/Login'
import { useSelector } from "react-redux"
import News from "./components/pages/News";


function App() {
	const isAuth = useSelector(store => store.posts.isAuth);
	const routes = isAuth ? privateRoutes() : publicRoutes()


	const router = createBrowserRouter([
		{
			element: <Home></Home>,
			errorElement: <Error></Error>,
			children: [
				...routes,
				{ path: 'news', element: <News></News> }
			],
		},

	]);

	console.log('App', isAuth, [...routes]);


	return (

		<div className="App">
			<RouterProvider router={router}>
			</RouterProvider>
		</div >
	)



}

export default App

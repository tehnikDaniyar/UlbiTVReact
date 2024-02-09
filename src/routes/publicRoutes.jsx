import Login from "../components/Login/Login"
import News from "../components/pages/News"
import { lazy } from "react"
import { Navigate } from "react-router-dom"

export default function publicRoutes() {
	// const DashBoard = lazy(() => import("../components/Login/Login.jsx"));


	return (
		[
			{ path: '/login', element: <Login></Login> },
			{ path: '*', element: <Navigate to="/login"></Navigate> }
		]
	)
}